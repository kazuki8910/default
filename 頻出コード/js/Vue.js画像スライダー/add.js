// スライダーのコンポーネント
new Vue({
    el: '#gallery',
    data: {
        disp          : 0,     // 画像のを格納回数
        swipe         : false, // スワイプの判別
        slide_interval: 4000   // スライダーが切り替わるインターバル
    },
    mounted(){
        const self = this;

        // 要素を変数に格納
        this.$wrapper = this.$refs.wrapper; // 画像のラッパー要素
        this.$figures = this.$wrapper.getElementsByClassName('gallery__figure'); // 画像の囲い要素の配列
        this.img_len  = this.$figures.length; // 画像の枚数
        this.val_right = self.img_len/2 * 100; // 画像のCSSのrightの値

        // 画像のCSS初期設定
        this.$wrapper.style.width = (this.img_len * 100) + '%'; // ラッパーサイズ指定
        this.$wrapper.style.right =  self.val_right + "%"; // 一枚目の画像を表示

        // 画像にCSSのorderを付与
        Object.keys(this.$figures).forEach(function(ind){
            const fig = self.$figures[ind];
            fig.style.order = ind;
        });

        // 画像の自動切り替わり
        setInterval(() => {
            if(!this.swipe){
                self.$wrapper.style.transition = "0.4s"; // トランジション付与
                self.g_drag_left(); // 画像切り替わる関数
            }
        }, self.slide_interval);
    },
    methods:{
        // マウスデバイス
        OnMouseStart: function (e) {
            this.g_start(e); // 関数実行
        },
        OnMouseMove: function(e) {
            this.g_drag(e, self); // 関数の実行
        },
        OnMouseEnd: function(e){
            this.g_end(e); // 関数実行
        },

        // タッチデバイス
        OnTouchStart: function (e) {
            this.g_start(e); // 関数実行
        },
        OntouchMove: function(e){
            this.g_drag(e); // 関数の実行
        },
        OnTouchEnd: function(e){
            this.g_end(e); // 関数実行
        },

        // 切り分けた関数
        // 画像をクリック（タップ）したときの関数
        g_start: function(e){
            const self = this;
            // 値取得
            self.start = self.g_current(e); // 画像をクリックした位置を取得
            self.current  = self.start; // 現在位置格納
            self.distance = 0; // 移動距離リセット

            // トランジションリセット
            self.$wrapper.style.transition = "0s";

            // スワイプスタートの合図
            self.swipe = true;
        },
        // 画像をドラッグしたときの関数
        g_drag: function(e){
            const self = this;
            // 設定値
            self.current  = self.g_current(e); // 現在位置取得
            self.distance = self.start - self.current; // 移動距離取得

            // ドラッグに合わせて画像スライド
            self.$wrapper.style.right = "calc(" + self.distance + "px" + " + " + self.val_right + "%)";
        },
        // ドラッグを止めたときの関数
        g_end: function(e){
            const self = this;
            // トランジション付与
            self.$wrapper.style.transition = "0.4s";
        
            // 左にドラッグしたとき
            if(self.distance > 60){
                self.g_drag_left();
            }
        
            // 右にドラッグしたとき
            else if(self.distance < -60){
                self.g_drag_right();
            }
        
            // ドラッグ距離が短かったとき
            else{
                self.$wrapper.style.right = self.val_right + "%";
            }
        
            // スワイプ終了の合図(スワイプしてすぐに自動で画像が切り替わらないように)
            setTimeout(() => {
                self.swipe = false;
            }, self.slide_interval);
        },

        // クリック（タッチ）している位置を取得
        g_current: function(e){
            const self = this;
            // 値セット
            if(e.touches){
                return e.touches[0].pageX;
            }
            else if(e.pageX){
                return e.pageX;
            }
        },
        // 左にドラッグしたときの関数
        g_drag_left: function(){
            const self = this;
            // 画像切替
            self.$wrapper.style.right = self.val_right+100 + "%";
            
            // disp変数を変更
            if(self.disp < self.img_len-1){
                self.disp ++;
            }
            else{
                self.disp = 0;
            }
        
            // 並び順計算
            setTimeout(function(){
                // 設定値
                self.$wrapper.style.transition = "0s";
                self.$wrapper.style.right = self.val_right + "%";
        
                // 並び替えのループ
                Object.keys(self.$figures).forEach(function(ind){
                    // 並び順計算
                    let order = Number(ind) - self.disp;
                    if(order < 0){
                        order += self.img_len;
                    }
        
                    // 並び替え
                    self.$figures[ind].style.order = order;
                });
            },400);
        },
        // 右にドラッグしたときの関数
        g_drag_right: function(){
            const self = this;
            // 画像切替
            self.$wrapper.style.right = self.val_right-100 + "%";
            
            // disp変数を変更
            if(self.disp > 0){
                self.disp --;
            }
            else{
                self.disp = self.img_len - 1;
            }
        
            // 並び順計算
            setTimeout(function(){
                // 設定値
                self.$wrapper.style.transition = "0s";
                self.$wrapper.style.right = self.val_right + "%";
        
                // 並び替えのループ
                Object.keys(self.$figures).forEach(function(ind){
                    // 並び順計算
                    let order = Number(ind) - self.disp;
                    if(order < 0){
                        order += self.img_len;
                    }
        
                    // 並び替え
                    self.$figures[ind].style.order = order;
                });
            },400);
        }
    }
})