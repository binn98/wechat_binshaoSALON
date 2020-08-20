// Component/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    card:{
      type:Array,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    card(e){
      let name = e.currentTarget.dataset.name
      this.triggerEvent('card',name)
    }
  }
})
