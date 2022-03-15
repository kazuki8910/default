
{
    new Vue({
        el: "#accordion",
        data: {
            isOpen: false
        },
        methods: {
            clickAccordion: function(){
                this.isOpen = !this.isOpen;
            },
            beforeEnter: function(el){
                el.style.height = '0';
            },
            enter: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeLeave: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.height = '0';
            }
        },
    });
}