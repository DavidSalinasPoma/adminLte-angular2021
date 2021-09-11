# COMANDOS DEL CLI

# 1.- Generar un componente

1.- Sisn archivo de prueba
ng g c pages/about --skipTests=true

2.- Generar con un nombre en especifico
ng g c pages/about/about --flat --skip-tests

# 2.- Generar un servicio

1.- Ver ayuda para generar un servicio
ng g s --help

2.- Simular la cracion de un servicio o componente
ng generate s services/user --dry-run

3.- Crear un servicio sin el archivo de prueba
ng g s services/user --flat --skip-tests

// Los servicios son globales se puede injectar en cualquier lugar
@Injectable({
providedIn: 'root'
})

# Generar un GUARD guardian

1.- Ver ayuda de generate g
ng generate --help

2.- Probar que se va a crear con el GUARD
ng g guard guard/auth -d --skip-tests

3.-Crear GUARD sin el archivo de prueba
ng g guard guard/auth --skip-tests

Es todo los comando para utilizar con el GENERATE g
app-shell
application
class
component
directive
enum
guard
interceptor
interface
library
module
pipe
resolver
service
service-worker
web-worker

# Comando para crear ROUTING

ng g m appRouting --flat

# Manejo de MODULOS

ng g m pages/pages --flat --skip-tests

Existen 2 maneras de hacer ruting
1.- Por rutas hijas en l app-routing.module.ts
2.- Por rutas por modulos los routing van a ser importados en el app.routing.module.ts

## CONSTRUCCION DE LA ESTRUCTURA DE LA PLANTILLA ADMINLTE V3.1.0

1.- SHARED.- Componentes que son utilizados por toda la APP
tendra su modulo.
ng g m shared/shared --flat --dry-run

-breadcrumbs
-footer
-header
-sidebar
ng g c shared/\* --skip-tests

2.- PAGES.- Tendra su propio modulo y sistema de rutas(aqui se importa SHARED)
ng g m pages/pages --flat --routing --dry-run

-dashboard
-grafica1
-progress
ng g c pages/\* --skip-tests

- Sistema de rutas de PAGES
  // Rutas PROTEGIDAS como hijas de app-routing.module.ts
  {
  // Cuando el path sea vacio va redireciones aun sub moduloComonenete
  path: 'dashboard', // ruta padre
  component: PagesComponent,
  // Definiendo rutas hijas de este modulo
  children: [ // ruta hija depende del padre
  { path: '', component: DashboardComponent }, // Path inicial
  { path: 'progress', component: ProgressComponent },
  { path: 'grafica1', component: Grafica1Component },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]
  },

# 3.- Crear la plantila para el login y registro AuTH

ng g m auth/auth --flat --routing --dry-run

-login
-register

ng g c auth/\* --skip-tests

# 4.- Crear nofound404 en la ruta principal APP

ng g c nofound404 --skip-tests
