wp.customize.controlConstructor["kirki-multicheck"]=wp.customize.kirkiDynamicControl.extend({initKirkiControl:function(n){(n=n||this).container.on("change","input",(function(){var i=[],e=0;jQuery.each(n.params.choices,(function(t){n.container.find('input[value="'+t+'"]').is(":checked")?(n.container.find('input[value="'+t+'"]').parent().addClass("checked"),i[e]=t,e++):n.container.find('input[value="'+t+'"]').parent().removeClass("checked")})),n.setting.set(i)}))}});
//# sourceMappingURL=control.js.map
