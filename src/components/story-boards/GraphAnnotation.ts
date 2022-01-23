import * as d3 from "d3";

export class GraphAnnotation {
  _id;
  _wrap;
  _align;
  _x;
  _y;
  _tx;
  _ty;
  _showConnector;
  _color;
  _backgroundColor;
  _title;
  _rect;
  _circle;
  _rectPadding;
  _label;
  _connector;
  _textNode;

  node;
  private _annoWidth: number;
  private _annoHeight: number;

  unscaledX;
  unscaledTarget;

  constructor(id = "") {
    this._id = id;
    this._wrap = 150;
    this._align = "start";
    this._x;
    this._y;
    this._tx = 0;
    this._ty = 0;
    this._showConnector = false;
    this._color = "black";
    this._backgroundColor = "none";
    this._title = d3
      .create("svg")
      .append("text")
      .attr("font-weight", "bold")
      .node();
    // svg`<text font-weight="bold"></text>`;
    this._rect = d3.create("svg").append("rect").node();
    // svg`<rect></rect>`;
    this._circle = d3
      .create("svg")
      .append("circle")
      .attr("r", 20)
      .attr("stroke-width", 3)
      .attr("fill", "none")
      .node();
    //  svg`<circle r=20 stroke-width="3" fill="none"></circle>`;
    this._rectPadding = 10;
    this._label = d3.create("svg").append("text").node();
    // svg`<text></text>`;
    this._connector = d3
      .create("svg")
      .append("line")
      .attr("class", "graph-annotation-connector")
      .attr("stroke", this._color)
      .node();
    // svg`<line class="graph-annotation-connector" stroke=${this._color}></line>`;
    this._textNode = d3
      .create("svg")
      .append("g")
      .attr("class", "graph-annotation-text")
      .attr("fill", this._color)
      .node();
    this._textNode.append(this._title);
    this._textNode.append(this._label);
    //.node();
    // svg`<g class="graph-annotation-text" style="fill: ${this.color}">${this._title}${this._label}</g>`;
    this.node = d3
      .create("svg")
      .append("g")
      .attr("display", "none")
      .attr("id", id)
      .attr("class", "graph-annotation")
      .attr("font-size", "12px")
      .node();

    this.node.appendChild(this._circle);
    this.node.appendChild(this._rect);
    this.node.appendChild(this._connector);
    this.node.appendChild(this._textNode);

    // svg`<g display="none" ${
    //     id ? 'id="' + id + '"' : ""
    //   } class="graph-annotation" font-size="12px">
    //     ${this._circle}
    //     ${this._rect}
    //     ${this._connector}
    //     ${this._textNode}
    // </g>`;
  }

  id(id) {
    this._id = id;
    this.node.setAttribute("id", id);
    return this;
  }

  title(title) {
    this._title.textContent = title;
    return this;
  }

  label(label) {
    this._label.textContent = label;
    return this;
  }

  wrap(wrap) {
    this._wrap = wrap;
    return this;
  }

  x(x) {
    this._x = x;
    return this;
  }

  y(y) {
    this._y = y;
    return this;
  }

  target(tx, ty, showConnector = true) {
    this._tx = tx;
    this._ty = ty;
    this._showConnector = showConnector;
    return this;
  }

  circleHighlight(color = "red", radius = 0) {
    this._circle.setAttribute("stroke", color);
    radius && this._circle.setAttribute("r", radius);
    return this;
  }

  fontSize(fontSize) {
    this.node.setAttribute("font-size", fontSize);
    return this;
  }

  align(align) {
    this._align = align;
    this.node.setAttribute("text-anchor", align);
    return this;
  }

  color(color) {
    this._color = color;
    this._textNode.style.fill = this._color;
    return this;
  }

  backgroundColor(backgroundColor) {
    this._backgroundColor = backgroundColor;
    this._rect.style.fill = this._backgroundColor;
    return this;
  }

  _alignToX() {
    // Uses the width and alignment of text to calculate correct x values of tspan elements
    return (
      (this._annoWidth / 2) *
      (this._align.toLowerCase() == "middle"
        ? 1
        : this._align.toLowerCase() == "end"
        ? 2
        : 0)
    );
  }

  _correctTextAlignment(textElem, annoWidth?) {
    // Aligns tspan elements based on chosen alignment
    Array.from(textElem.children).forEach((tspan: any) =>
      tspan.setAttribute("x", this._alignToX()),
    );
  }

  _wrapText(textElem) {
    // SVG text is all in a single line - to wrap text we split rows into
    // individual <tspan> elements
    const text = textElem.textContent;
    let words = text.split(" ");

    // We need the height of a character/row for separating title and label
    const { height: rowHeight } = textElem.getBoundingClientRect();

    // Draw each word onto svg and save its width before removing
    let wordElem;
    words = words.map((word) => {
      // wordElem = textElem.appendChild(svg`<tspan>${word}</tspan>`);
      wordElem = textElem.appendChild(
        d3.create("svg").append("tspan").text(word).node(),
      );

      const { width: wordWidth } = wordElem.getBoundingClientRect();
      textElem.removeChild(wordElem);
      return { word: word, width: wordWidth };
    });

    textElem.textContent = "";

    // Keep adding words to row until width exceeds span then create new row
    let currentWidth = 0;
    let rowString = [];
    let isLastWord, forceNewLine;

    words.forEach((word, i) => {
      // A newline can be forced by including ' \n ' with spaces around it
      forceNewLine = word.word == "\n";
      if (forceNewLine) {
        // Multiple consecutive ' \n ' require the tspan to have text to function
        // We fill the tspan with arbitrary text and then hide it
        const multiLineBreak = rowString.length == 0;
        const content = multiLineBreak ? "linebreak" : rowString.join(" ");
        const visStr = multiLineBreak ? 'visibility="hidden"' : "";

        textElem.appendChild(
          // @ts-expect-error -- import svg`` ?
          svg`<tspan x=0 dy="1.1em" ${visStr}>${content}</tspan>`,
        );

        currentWidth = 0;
        rowString = [];
        return;
      }

      // Don't factor in the width taken up by spaces atm
      if (currentWidth + word.width < this._wrap) {
        currentWidth += word.width;
        rowString.push(word.word);
      } else {
        textElem.appendChild(
          // svg`<tspan x=0 dy="1.1em">${rowString.join(" ") + " "}</tspan>`,
          d3
            .create("svg")
            .append("tspan")
            .attr("x", 0)
            .attr("dy", "1.1em")
            .text(rowString.join(" ") + " ")
            .node(),
        );
        currentWidth = word.width;
        rowString = [word.word];
      }

      isLastWord = i == words.length - 1;
      if (isLastWord) {
        // textElem.appendChild(
        //   svg`<tspan x=0 dy="1.1em">${rowString.join(" ") + " "}</tspan>`,
        // );

        textElem.appendChild(
          d3
            .create("svg")
            .append("tspan")
            .attr("x", 0)
            .attr("dy", "1.1em")
            .text(rowString.join(" ") + " ")
            .node(),
        );
      }
    });

    return rowHeight;
  }

  _formatText() {
    const rowHeight = this._wrapText(this._title);
    this._wrapText(this._label);

    // Calculate spacing between title and label
    const { height: titleHeight } = this._title.getBoundingClientRect();
    const titleSpacing = titleHeight + rowHeight * 0.2;
    this._label.setAttribute("y", titleSpacing);
  }

  _repositionAnnotation() {
    const { width: annoWidth, height: annoHeight } =
      this._textNode.getBoundingClientRect();

    this._annoWidth = annoWidth;
    this._annoHeight = annoHeight;

    this._rect.setAttribute(
      "transform",
      `translate(${this._x - (annoWidth + this._rectPadding) / 2},${
        this._y - (annoHeight + this._rectPadding) / 2
      })`,
    );

    // Translate x,y position to center of anno (rather than top left)
    this._textNode.setAttribute(
      "transform",
      `translate(${this._x - annoWidth / 2},${this._y - annoHeight / 2})`,
    );

    // Align text correctly
    this._correctTextAlignment(this._title);
    this._correctTextAlignment(this._label);
  }

  _addConnector() {
    const dy = this._y - this._ty;
    const dx = this._x - this._tx;

    const above = dy > 0 ? 1 : 0;
    const left = dx > 0 ? 1 : 0;

    let ix, iy;
    if (dy == 0) {
      iy = this._y;
      ix = this._x + (-1) ** left * (this._annoWidth / 2);
    }

    if (dx == 0) {
      ix = this._x;
      iy = this._y + (-1) ** above * (this._annoHeight / 2);
    }

    if (dx !== 0 && dy !== 0) {
      const rectGrad = this._annoHeight / this._annoWidth;
      const lineGrad = dy / dx;
      const c = this._y - lineGrad * this._x;

      const hIntersect =
        (lineGrad >= rectGrad && lineGrad >= -rectGrad) ||
        (lineGrad <= rectGrad && lineGrad <= -rectGrad);

      if (hIntersect) {
        iy = this._y + (-1) ** above * (this._annoHeight / 2);
        ix = (iy - c) / lineGrad;
      } else {
        ix = this._x + (-1) ** left * (this._annoWidth / 2);
        iy = lineGrad * ix + c;
      }
    }

    this._connector.setAttribute("x1", ix);
    this._connector.setAttribute("x2", this._tx);
    this._connector.setAttribute("y1", iy);
    this._connector.setAttribute("y2", this._ty);

    this._connector.setAttribute("stroke", this._color);
  }

  addTo(ctx) {
    d3.select(ctx).append(() => this.node);
    this._formatText();
    this._repositionAnnotation();

    if (this._backgroundColor) {
      this._rect.style.fill = this._backgroundColor;
      this._rect.setAttribute("width", this._annoWidth + this._rectPadding);
      this._rect.setAttribute("height", this._annoHeight + this._rectPadding);
      this._rect.setAttribute("rx", 5);
    }

    if (!(this._tx == this._x && this._ty == this._y) && this._showConnector) {
      this._addConnector();
    }

    this._circle.setAttribute("cx", this._tx);
    this._circle.setAttribute("cy", this._ty);

    // Reveal annotation
    this.node.removeAttribute("display");
  }

  updatePos(x, y) {
    this._x = x;
    this._y = y;

    this._repositionAnnotation();
    if (!(this._tx == this._x && this._ty == this._y) && this._showConnector) {
      this._addConnector();
    }
  }
}
