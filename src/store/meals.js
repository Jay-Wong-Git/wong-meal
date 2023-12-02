import {defineStore} from "pinia";
import {ref} from "vue";

export const useMealsStore = defineStore("meals", {
    state: () => ({
        data: [
            {
                id: "1",
                title: "汉堡包",
                desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
                price: 12,
                img: "/images/meals/1.png"
            },
            {
                id: "2",
                title: "双层吉士汉堡",
                desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
                price: 20,
                img: "/images/meals/2.png"
            },
            {
                id: "3",
                title: "巨无霸",
                desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
                price: 24,
                img: "/images/meals/3.png"
            },
            {
                id: "4",
                title: "麦辣鸡腿汉堡",
                desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
                price: 21,
                img: "/images/meals/4.png"
            },
            {
                id: "5",
                title: "板烧鸡腿堡",
                desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
                price: 22,
                img: "/images/meals/5.png"
            },
            {
                id: "6",
                title: "麦香鸡",
                desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
                price: 14,
                img: "/images/meals/6.png"
            },
            {
                id: "7",
                title: "吉士汉堡包",
                desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
                price: 12,
                img: "/images/meals/7.png"
            }
        ],
        keywords: ""
    }),
    getters: {
        /*获取与关键字匹配的商品*/
        filterMeals: function () {
            return this.data.filter(item => item.title.indexOf(this.keywords) !== -1);
        },
        /*获取购物车中的所有商品*/
        cartMeals: (state) => {
            return state.data.filter(item => item.count > 0);
        },
        /*获取购物车中商品的总数*/
        totalCount: function () {
            if (!this.cartMeals.length > 0)
                return 0;
            else
                return this.cartMeals.reduce((result, item) => result + item.count, 0);
        },
        /*获取购物车中商品总价*/
        totalAmount: function () {
            if (!this.cartMeals.length > 0)
                return 0;
            else
                return this.cartMeals.reduce((result, item) => result + item.count * item.price, 0);
        }
    },
    actions: {
        /*修改购买商品的数量*/
        addMealToCart(meal) {
            // 购物车中没有该 meal
            if (isNaN(meal.count)) {
                meal.count = 0;
            }
            meal.count++;
        },
        subMeal(meal) {
            if (isNaN(meal.count) || meal.count <= 0) return;
            meal.count--;
        },
        /*清空购物车*/
        clearCart() {
            this.cartMeals.forEach(item => item.count = 0);
        }
    }
})