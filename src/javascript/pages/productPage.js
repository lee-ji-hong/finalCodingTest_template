export default class productPage {
    render() {
        console.log('상품페이')
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = '상품목록 페이지입니다.';

        const anchor = document.createElement('a');
        anchor.href = './detail';
        anchor.innerText = '상세페이지 이동';

        container.appendChild(anchor);
        container.appendChild(element);

        return container
    }
}