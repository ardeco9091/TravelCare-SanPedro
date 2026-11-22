# TravelCare · San Pedro de Jujuy

Aplicación web para orientar a visitantes de San Pedro de Jujuy con un catálogo de alojamientos, centros de salud, farmacias y transporte local. Incluye un mapa interactivo, enlaces a Google Maps y un panel para que las personas administradoras mantengan los datos sincronizados con Supabase.

## Funciones

- Explorar y filtrar prestadores y servicios por categoría.
- Ver el catálogo en un mapa y abrir la ubicación seleccionada en Google Maps.
- Consultar información de contacto, horarios, estado y servicios destacados.
- Administrar prestadores, servicios e integrantes del proyecto desde un panel protegido.
- Guardar los cambios en Supabase para que estén disponibles al volver a abrir la aplicación.
- Exportar el catálogo desde el panel administrativo como JSON.

## Requisitos

- Un proyecto de [Supabase](https://supabase.com/) para guardar cambios y administrar el acceso.
- Un navegador moderno y conexión a Internet. Leaflet, Supabase JS y las tipografías se cargan desde servicios externos.
- Python 3, solo si se desea servir el sitio localmente con el comando indicado abajo.

## Puesta en marcha

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/ardeco9091/TravelCare-SanPedro.git
   cd TravelCare-SanPedro
   ```

2. En Supabase, creá un proyecto y abrí **Project Settings → API Keys**. Copiá la Project URL y la clave pública `publishable` en `supabase-config.js`, en los campos que usa `window.TRAVELCARE_SUPABASE_CONFIG`. La clave `anon` también es compatible como clave heredada.

   La clave publicable está diseñada para usarse en el navegador junto con las políticas RLS del esquema. **No pongas una clave `service_role` ni otra clave secreta en este proyecto o en el frontend.**

3. En **SQL Editor**, ejecutá `supabase/schema.sql` para crear las tablas y políticas de acceso.

4. Para cargar los registros de ejemplo en un proyecto nuevo, ejecutá `supabase/seed.sql`.

   **Atención:** el archivo empieza con `TRUNCATE public.places`, así que borra el catálogo existente antes de cargar los datos iniciales. No lo vuelvas a ejecutar sobre una base que ya tenga información que quieras conservar.

5. En **Authentication → Users**, creá la cuenta administradora con correo y contraseña. Después, en SQL Editor, habilitala asociando su ID de usuario a `public.admin_users`:

   ```sql
   insert into public.admin_users (user_id)
   select id
   from auth.users
   where email = 'TU_CORREO_DE_ADMIN';
   ```

   Reemplazá `TU_CORREO_DE_ADMIN` por el correo usado al crear la cuenta. La cuenta podrá iniciar sesión desde el panel de administración de TravelCare.

6. Abrí `index.html` en un servidor local o publicá los archivos estáticos del proyecto.

   Para iniciar un servidor local con Python:

   ```bash
   python -m http.server 8000
   ```

   Después visitá <http://localhost:8000>.

## Publicación en GitHub Pages

El sitio es estático. Para publicarlo, abrí **Settings → Pages** del repositorio, elegí **Deploy from a branch**, seleccioná `main` y la carpeta `/ (root)`, y guardá. GitHub Pages publicará `index.html` y los recursos del repositorio.

Verificá que la URL y la clave pública de Supabase estén configuradas en `supabase-config.js` antes de publicar. Las operaciones administrativas requieren una sesión autenticada y permiso en `public.admin_users`; las políticas RLS de `supabase/schema.sql` aplican esa protección en la base.

## Archivos principales

```text
index.html                  Estructura de la aplicación
styles.css                  Estilos y diseño adaptable
app.js                      Catálogo, mapa, autenticación y panel de administración
supabase-config.js          URL y clave pública de Supabase
supabase/schema.sql         Tablas, permisos y datos iniciales del proyecto
supabase/seed.sql           Registros de ejemplo para una instalación nueva
supabase/actualizar_ubicaciones.sql
                            Actualizaciones de coordenadas verificadas disponibles
logo.png                    Identidad visual
```

## Datos de ubicaciones

El catálogo tiene 26 registros de ejemplo. Las coordenadas nuevas confirmadas están reflejadas en `app.js`, `supabase/seed.sql` y `supabase/actualizar_ubicaciones.sql` para los IDs 2, 3, 8 y 9. Las otras 22 ubicaciones todavía requieren verificación; no ejecutes ni trates el archivo de actualización como una corrección completa de las 26 fichas.

## Contribuciones y cambios

Los cambios de datos hechos en el panel se guardan en Supabase. Los cambios de código se publican al subirlos al repositorio y volver a desplegar el sitio estático.
