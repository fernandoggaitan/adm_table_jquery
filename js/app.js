function productos(){

	var tbody = $('#lista_productos tbody');
	var fila_contenido = tbody.find('tr').first().html();
	
	$('#lista_productos').on('click', '.button_limpiar_producto', function(){		
		$(this).parents('tr').eq(0).find('.titulo, .descripcion, .precio').val('');
	});

	$('#lista_productos').on('click', '.button_eliminar_producto', function(){		
		$(this).parents('tr').eq(0).remove();
	});

	$('#lista_productos .button_agregar_producto').click(function(){
		var fila_nueva = $('<tr></tr>');
		fila_nueva.append(fila_contenido);
		tbody.append(fila_nueva);
	});

}