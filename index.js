var page = {
  data: { score: 0, showReset: false },
  onInit: function() { this.score = 0; },
  tapCookie: function() { this.score = this.score + 1; },
  tapReset: function() { this.showReset = true; },
  tapYes: function() { this.score = 0; this.showReset = false; },
  tapNo: function() { this.showReset = false; },
  render: function(t) {
    return t._c("div", {staticClass:["root"]}, [
      t._c("image", {attrs:{src:"$media:background"}, staticClass:["bg"]}, []),
      t._c("text", {attrs:{value:function(){return String(t.score)}}, []),
      t._c("text", {attrs:{value:"cookies"}}, []),
      t._c("div", {staticClass:["cookieWrap"], on:{click:t.tapCookie}}, [
        t._c("image", {attrs:{src:"$media:cookie-icon"}, staticClass:["cookieImg"]}, [])
      ]),
      t._c("div", {staticClass:["reset"], on:{click:t.tapReset}}, [ t._c("text", {attrs:{value:"RESET"}}, []) ]),
      t._c("div", {staticClass:["modal"]}, [
        t._c("text", {attrs:{value:"Reset score?"}}, []),
        t._c("div", {staticClass:["row"]}, [
          t._c("div", {staticClass:["yes"], on:{click:t.tapYes}}, [ t._c("text", {attrs:{value:"Yes"}}, []) ]),
          t._c("div", {staticClass:["no"], on:{click:t.tapNo}}, [ t._c("text", {attrs:{value:"No"}}, []) ])
        ])
      ])
    ]);
  },
  styles: { classSelectors: {
    root:{width:466,height:466,backgroundColor:"#000000",flexDirection:"column",alignItems:"center",justifyContent:"space-between",paddingTop:20,paddingBottom:30,paddingLeft:20,paddingRight:20},
    bg:{width:466,height:466},
    cookieWrap:{width:466,height:300,alignItems:"center",justifyContent:"center"},
    cookieImg:{width:260,height:260},
    reset:{width:360,height:56,borderRadius:16,backgroundColor:"#1c1c1e",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#333333"},
    modal:{width:340,height:140,borderRadius:18,backgroundColor:"#1a1a1a",alignItems:"center",justifyContent:"center"},
    row:{flexDirection:"row",justifyContent:"space-between",width:280}
  } }
};
