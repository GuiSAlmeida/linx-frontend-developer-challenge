const renderLoading = () => {
  const markup = `
    <div class="loading">
      <div class="loading-shimmer">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
      </div>
    </div>
    <div class="loading">
      <div class="loading-shimmer">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
      </div>
    </div>
    <div class="loading">
      <div class="loading-shimmer">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
      </div>
    </div>
    <div class="loading">
      <div class="loading-shimmer">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
      </div>
    </div>
  `;

  const element = document.getElementById('products-list');
  element.innerHTML = markup;
};

export default renderLoading;
