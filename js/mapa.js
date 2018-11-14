        function iniciar() {
			
		 var styledMapType = new google.maps.StyledMapType(
            [
				{
				featureType: 'administrative.locality',
				elementType: 'labels.text',
				stylers: [
				{
					color: '#ff8000'
				},
				{
					weight: 0.5
				}
						 ]
				},
				{
				featureType: 'administrative.neighborhood',
					elementType: 'labels.text',
						stylers: [
							{
								color: '#0000ff'
							},
							{
								weight: 0.5
							}
						]
				},
				{
					featureType: 'poi.business',
						stylers: [
							{
								visibility: 'off'
							}
						]
				},
					{
						featureType: 'road',
							elementType: 'labels.icon',
								stylers: [
									{
										visibility: 'off'
									}
								]
					},
						{
							featureType: 'road',
							elementType: 'labels.text',
							stylers: [{color: '#000000'},{weight: 0.5}]
						},
							{
								featureType: 'transit',
									stylers: [
										{
											visibility: 'off'
										}
									]
							}
			],
            {name: 'Vista clara'});

			
			$('#mensaje').toggle();
  			$('#mensaje2').toggle();   
			$('#boton').toggle();
			$('#map').toggle();
				
			google.maps.event.addDomListener(window, 'load', iniciar);
			
			var map = new google.maps.Map(document.getElementById("map"),{
                
				center: new google.maps.LatLng(-32.31280824194661, -58.07588213247885),

                zoom: 14,
				
				mapTypeControlOptions: {
				mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
				}

				});
			
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');

        }