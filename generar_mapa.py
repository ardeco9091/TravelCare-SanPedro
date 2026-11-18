import folium

# Mapa de servicios de TravelCare centrado en San Pedro de Jujuy
mapa = folium.Map(
    location=[-24.2312, -64.8682],
    zoom_start=15,
    tiles="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    attr="Esri"
)

# Puntos reales de San Pedro de Jujuy organizados por categoría
servicios = [
    # Salud y farmacias
    {"categoria": "Salud", "color": "green", "nombre": "Farmacia del Milagro", "direccion": "Gdor. Tello 185", "lat": -24.22966, "lng": -64.86818},
    {"categoria": "Salud", "color": "green", "nombre": "Farmacia La Perla", "direccion": "Av. Brasil 62", "lat": -24.24226, "lng": -64.87470},
    {"categoria": "Salud", "color": "green", "nombre": "Farmacia Far-Mar", "direccion": "Alsina 430", "lat": -24.23153, "lng": -64.86556},
    {"categoria": "Salud", "color": "green", "nombre": "Hospital Guillermo C. Paterson", "direccion": "Av. Siria esq. Paterson", "lat": -24.22685, "lng": -64.86490},
    # Alojamiento
    {"categoria": "Alojamiento", "color": "darkblue", "nombre": "Hotel Vélez Sarsfield", "direccion": "Vélez Sarsfield 245", "lat": -24.23080, "lng": -64.86920},
    {"categoria": "Alojamiento", "color": "darkblue", "nombre": "Hotel Colonial San Pedro", "direccion": "Miguel Araoz 180", "lat": -24.23190, "lng": -64.86740},
    {"categoria": "Alojamiento", "color": "darkblue", "nombre": "Residencial El Sol", "direccion": "Sarmiento 320", "lat": -24.23260, "lng": -64.86680},
    # Transporte local
    {"categoria": "Transporte", "color": "orange", "nombre": "Terminal de Ómnibus San Pedro", "direccion": "Av. Presidente Perón s/n", "lat": -24.23480, "lng": -64.86410},
    {"categoria": "Transporte", "color": "orange", "nombre": "Parada de Taxis Plaza Belgrano", "direccion": "Mitre frente a Plaza Belgrano", "lat": -24.23110, "lng": -64.86850},
    {"categoria": "Transporte", "color": "orange", "nombre": "Remises San Pedro Centro", "direccion": "Alberdi 210", "lat": -24.23010, "lng": -64.86710},
]

for s in servicios:
    link = f"https://www.google.com/maps/dir/?api=1&destination={s['lat']},{s['lng']}"
    texto = (
        f"<b>{s['nombre']}</b> ({s['categoria']})<br>"
        f"Dirección: {s['direccion']}<br><br>"
        f"<a href='{link}' target='_blank'>Cómo llegar</a>"
    )

    folium.Marker(
        location=[s["lat"], s["lng"]],
        popup=folium.Popup(texto, max_width=250),
        tooltip=f"{s['nombre']} - {s['categoria']}",
        icon=folium.Icon(color=s["color"])
    ).add_to(mapa)

mapa.save("mapa.html")
print("Mapa generado correctamente en mapa.html")
