function Tab (node){
    this.init(node)
    this.bind()
}

Tab.prototype = {
    constructor: Tab,
    init: function(node){
        this.$tab = node
        this.$btn = this.$tab.find('li')
        this.$content = this.$tab.find('.content')

    },
    bind: function(index){
        var _this = this
        this.$btn.on('click',function () {
            $(this).addClass('active')
                .siblings().removeClass('active')
            index = $(this).index()
            _this.show(index)
        })

    },
    show: function (index) {
        this.$content.eq(index).addClass('show')
            .siblings().removeClass('show')

    }

}

var tab1 = new Tab($('.tab-container').eq(0));
var tab2 = new Tab($('.tab-container').eq(1));
