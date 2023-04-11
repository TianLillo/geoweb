var config = {
    style: 'mapbox://styles/tianlillo/clgbdv8cj002h01kpsjdl3xhh',
    accessToken: 'pk.eyJ1IjoidGlhbmxpbGxvIiwiYSI6ImNsY3ludnBmODBhY2Izcm5vYzRibzd3YXoifQ.gOZiyMs0U6_TPz_qK1nvIw',
    showMarkers: false,
    markerColor: '#ff0000',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Incendios forestales Chile',
    subtitle: 'Evolución de los incendios forestales acontecidos en febrero del 2023',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: '30ene',
            alignment: '',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center:[-72.57915, -36.60209],
                zoom: 3,
                pitch: 0,
                bearing: 0                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'chile',
                   opacity: 1,
                }
           ],
           onChapterExit: [
               {
                   layer: 'chile',
                   opacity: 0,
               }
           ]
        },{
            id: '30eneb',
            alignment: 'left',
            hidden: false,
            title: '30 de enero, alerta temprana por condiciones idoneas para incendios',
            image: 'https://s3.amazonaws.com/gobcl-prod/filer_public_thumbnails/filer_public/b3/a6/b3a66a45-77fc-4a5f-895e-3bb73fab2d5a/170120-rrss-altoincendios_303030a2-660x330.png__1440x2000_q70_subsampling-2.jpg',
            description: 'El 30 de enero de 2023, Senapred declaró alerta temprana preventiva para la Región de Ñuble, por amenaza de incendios forestales tras episodios de altas temperaturas',
            location: {
                center: [-72.69607, -36.59054],
                zoom: 8,
                pitch: 0,
                bearing: 0,
                speed: 0.7,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'nuble',
                    opacity: 1,
                 }
            ],
            onChapterExit: [
                {
                    layer: 'nuble',
                    opacity: 0,
                }
            ]
        },{
            id: '1y2feb',
            alignment: 'right',
            hidden: false,
            title: '1 y 2 de febrero, comienzan los primeros focos y riesgo inminente para las población',
            image: 'https://static.emol.cl/emol50/Fotos/2023/02/02/file_20230202001642.jpg',
            description: 'Conaf reforzó dicha determinación al informar que hay siniestros en diversas comunas de Ñuble, y que esos incendios presentan una amenaza inminente a personas, viviendas, poblaciones. Se declara alerta roja en las siguientes comunas: Chillan, Chillan viejo, Quirihue, Quillon, Coelemu, para el final del día toda la región terminaría bajo alerta roja.',
            location: {
                center: [-72.00585, -36.36810],
                zoom: 9,
                pitch: 32.99,
                bearing: -42.40,
                speed: 0.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'comunas_alerta_roja',
                    opacity: 1,
                },
                {
                    layer: 'nuble',
                    opacity: 1,
                },
                
           ],
           onChapterExit: [,
               {
                layer: 'comunas_alerta_roja',
                opacity: 0,
             },
             {
                layer: 'nuble',
                opacity: 0,
             }
           ]
        },{
            id: '3feb',
            alignment: 'right',
            hidden: false,
            title: '3 de febrero, primer Martir y nueva región comprometida',
            image: 'https://pbs.twimg.com/media/FoEcycwXwAAZm9S?format=jpg&name=large',
            description: 'Se suma la región de La Araucanía a la emergencia, además se confirma la muerte de una bombera en la comuna de Santa Juana región del Biobío y un helicoptero capotado en Galvarino región de La Araucanía mientras combatían los incendios, falleciendo el piloto y el mecánico.',
            location: {
                center: [-70.94293, -37.80914],
                zoom: 6.8,
                pitch: 0,
                bearing: 0,
                speed: 0.3, //velocidad del flyto
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sta-juana-y-galvarino',
                    opacity: 1
                  },
                  {
                    layer: 'nuble2',
                    opacity: 1
                  },
                  {
                    layer: 'araucania2',
                    opacity: 1
                  }
           ],
           onChapterExit: [
                {
                    layer: 'sta-juana-y-galvarino',
                    opacity: 0
                },{
                    layer: 'nuble2',
                    opacity: 0
                },{
                    layer: 'araucania2',
                    opacity: 0
                }
           ]
        },{
            id: '6feb',
            alignment: 'left',
            hidden: false,
            title: '6 de febrero, Comienza a llegar ayuda internacional y el humo a la capital',
            image: 'https://pbs.twimg.com/media/FoTLCeLWAB0PeGq?format=jpg&name=900x900',
            description: 'El humo procedente de los incendios forestales del centro y sur de Chile, llegó a la región Metropolitana de Santiago. Se recomendó el uso de mascarillas quirúrgicas. Además, El mismo día llegó a Chile el DC-10 Air Tanker,avión cisterna de gran capacidad traído desde Estados Unidos para combatir los incendios forestales.',
            location: {
                center: [-70.80275, -33.44605],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: 0.4        
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: '9feb',
            alignment: 'right',
            hidden: false,
            title: '9 de febrero, toque de queda y nueva región afectada',
            image: 'https://static.emol.cl/emol50/Fotos/2023/02/14/file_20230214092501.jpg',
            description: 'Se confirmó la medida de toque de queda para 28 comunas de las regiones más afectadas —Ñuble, Biobío y La Araucanía—, las cuales han estado rigiendo desde las 00:00 hasta las 05:00, iniciando la primera el viernes 10 de febrero de 2023.',
            location: {
                center:[-71.12485, -38.57739],
                zoom: 7,
                pitch: 50,
                bearing: 16.80,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nuble2',
                    opacity: 1
                },{
                    layer: 'biobio2',
                    opacity: 1
                },{
                    layer: 'araucania2',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'nuble2',
                    opacity: 0
                },{
                    layer: 'biobio2',
                    opacity: 0
                },{
                    layer: 'araucania2',
                    opacity: 0
                },
            ]
        },{
            id: '11feb',
            alignment: 'left',
            hidden: false,
            title: '11 de febrero, nuevo accidente aéreo',
            image: 'https://bionoticias.cl/wp-content/uploads/2023/02/Avion-Capotado-Hualqui-2.jpg',
            description: 'Un avión de CONAF capotó en la comuna de Hualqui —Región del Biobío— mientras combatía el incendio forestal Omerhuet, resultando herido el piloto.',
            location: {
                center: [-73.06890, -36.97517],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hualqui',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hualqui',
                    opacity: 0
                }

            ]
        },{
            id: '12feb',
            alignment: 'right',
            hidden: false,
            title: '12 de febrero, el trabajo comienza a surtir efecto',
            image: 'https://media.biobiochile.cl/wp-content/uploads/2023/02/social-lluvia-incendios-1200x633.png',
            description: 'Según el reporte del Gobierno, los incendios forestales menguaron en diecinueve, pasando de 98 a 79 fuera de control. Esto gracias principalmente al cambio en las condiciones climáticas —lluvia— en la zona centro-sur y el trabajo de control.',
            location: {
                center:[-71.12485, -38.57739],
                zoom: 7,
                pitch: 50,
                bearing: 16.80,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nuble',
                    opacity: 1
                },{
                    layer: 'biobio',
                    opacity: 1
                },{
                    layer: 'araucania',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'nuble',
                    opacity: 0
                },{
                    layer: 'biobio',
                    opacity: 0
                },{
                    layer: 'araucania',
                    opacity: 0
                },
            ]
        },{
            id: '27feb',
            alignment: 'left',
            hidden: false,
            title: '27 de febrero, se controla el incendio de Santa Ana.',
            image: 'https://ca-times.brightspotcdn.com/dims4/default/54b5310/2147483647/strip/true/crop/5508x3672+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9b%2F00%2F3786a3ab41a0553860e3b3413e7d%2Fba0ef741d41343c186b387e10c63133f',
            description: 'El 27 de febrero de 2023, es controlado en su expansión el incendio forestal Santa Ana —comuna de Coronel—, luego de veinticinco días fuera de control, fue denominado como el más mortifero.',
            location: {
                center: [-73.12056, -37.50118],
                zoom: 9,
                pitch: 57.49,
                bearing: -18.40,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'santa-ana',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'santa-ana',
                    opacity: 0
                }
            ]
        },{
            id: '19mar',
            alignment: 'right',
            hidden: false,
            title: '19 de marzo, Emergencia -casi- controlada',
            image: 'https://www.latercera.com/resizer/83oLWY3K-AtK_brPDDmDu4srPhU=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/CXVNNZKX6ZGQJJZ5QLSL2HMMC4.png',
            description: ' Senapred reportó un total de cinco incendios forestales en combate en el país: uno en la región de Ñuble, y cuatro en la región del Biobío.',
            location: {
                center: [-71.39868, -37.46935],
                zoom: 7.5,
                pitch: 43.29,
                bearing: -9.08,
                speed: 0.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nuble3',
                    opacity: 1
                },
                {
                    layer: 'biobio',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'nuble3',
                    opacity: 0
                },{
                    layer: 'biobio',
                    opacity: 0
                }
            ]
        },{
            id: '27mar',
            alignment: 'left',
            hidden: false,
            title: 'Resumen de la emergencia hasta el 27 de marzo',
            image: 'https://services.meteored.com/img/article/incendios-pavorosos-en-el-centro-sur-de-chile-1675830933375_1024.jpg',
            description: '26 personas fallecidas, 3582 personas lesionadas y 7835 damnificados. 440.000 hectáreas afectadas.',
            location: {
                center: [-72.98195, -38.15001],
                zoom: 8,
                pitch: 65.05,
                bearing: 0,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quemado',
                    opacity: 1,
                 }
            ],
            onChapterExit: [
                {
                    layer: 'quemado',
                    opacity: 0,
                 }
            ]
        },{
            id: '27marb',
            alignment: 'left',
            hidden: true,
            title: 'Resumen de la emergencia hasta el 27 de marzo',
            image: 'https://services.meteored.com/img/article/incendios-pavorosos-en-el-centro-sur-de-chile-1675830933375_1024.jpg',
            description: '26 personas fallecidas, 3582 personas lesionadas y 7835 damnificados. 440.000 hectáreas afectadas.',
            location: {
                center: [-71.59788, -35.45686],
                zoom: 8,
                pitch: 61.55,
                bearing: -162.65,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quemado',
                    opacity: 1,
                 }
            ],
            onChapterExit: [
                {
                    layer: 'quemado',
                    opacity: 0,
                 }
            ]
        },{
            id: 'credits',
            alignment: 'left',
            hidden: false,
            title: 'Agradecimientos',
            image: 'https://live.staticflickr.com/65535/52732718498_45bd97a9b1_b.jpg',
            description: 'Agradecemos la ayuda internacional de los países que aportaron en el combate de esta tragedia: Argentina, Brasil, Colombia, China, Ecuador, España, USA, Francia, Italia, Japón, México, Perú, Portugal, UE y Venezuela',
            location: {
                center:[-72.57915, -36.60209],
                zoom: 3,
                pitch: 0,
                bearing: 0,
                speed: 0.6,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quemado',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'quemado',
                    opacity: 0,
                 }
            ]
        },
    ]
};
