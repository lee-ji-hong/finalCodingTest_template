import { CartPageSection } from "../components/Cart/common/index.js";
import { CouponSelectBox, OrderItem, SelectedCouponList,OrderTable } from "../components/Cart/index.js";
import { Component, createComponent } from "../core/index.js";

class CartPage extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    cancleCoupon(){
        console.log("쿠폰 취소")
    }
    render(){
        const cartContainer = document.createElement("main");
        cartContainer.setAttribute("class","cart")

        const cartArticle = document.createElement("article");
        cartArticle.setAttribute("class", "cart-article");

        const headingTitle = document.createElement("h1");
        headingTitle.innerText = "장바구니/결제";
        
        const couponSelectBox = createComponent(CouponSelectBox,{
            coupons:[{id:1,couponName:"더미쿠폰"}],
        });

        const selectedCouponList = createComponent(SelectedCouponList,{
            selectedCoupons:[{id:1,couponName:"더미쿠폰"}],
            cancleCoupon:this.cancleCoupon.bind(this)
        });

        
        const couponSection = createComponent(CartPageSection,{
            sectionTitle:"쿠폰 사용",
            sectionType:"coupon-section",
            childrenEl:[couponSelectBox,selectedCouponList]
        });

        const orderProductSection = createComponent(CartPageSection,{
            sectionTitle:"주문 상품",
            sectionType:"order-section",
        })
        
        const orderItem = createComponent(OrderItem,{});
        const orderTable = createComponent(OrderTable,{
            childrenEl:[orderItem]
        })
        orderProductSection.append(orderTable)

        cartArticle.append(headingTitle,couponSection,orderProductSection);
        cartContainer.append(cartArticle);
        return cartContainer

    }
}

export default CartPage