+++
title = "(Hu)go Template Primer"
description = ""
date = "2014-04-02"
categories = [
    "Development",
    "golang",
]
emoji = "🍗"
+++

Hugo usa la excelente biblioteca [go][] [html / template][gohtmltemplate] para
su plantilla de motor. Es un motor extremadamente ligero que proporciona una muy
pequeña cantidad de lógica. Según nuestra experiencia, es la cantidad justa de
Lógica para poder crear un buen sitio web estático. Si has usado otros
sistemas de plantillas de diferentes idiomas o marcos encontrará una gran cantidad de
Similitudes en las plantillas go.

Este documento es una breve introducción sobre el uso de go templates. El [go docs][gohtmltemplate]
Proporcionar más detalles.

## Introducción a Go Templates

Las plantillas Go proporcionan un lenguaje de plantillas extremadamente simple. Se adhiere a la
creencia de que solo la lógica más básica pertenece a la plantilla o capa de vista.
Una consecuencia de esta simplicidad es que las plantillas se analizan muy rápidamente.

Una característica única de las plantillas go es que son conscientes del contenido. Variables y
El contenido se desinfectará según el contexto en el que se utilicen. Más
los detalles se pueden encontrar en [go docs][gohtmltemplate].

## Sintaxis básica

Las plantillas de go lang son archivos html con la adición de variables y
funciones

** Las variables y funciones de Go están disponibles dentro de {{}} **

Accediendo a una variable predefinida "foo":

    {{foo}}

** Los parámetros se separan usando espacios **

Llamando a la función sumar con entrada de 1, 2:

    {{add 1 2}}

** Se accede a los métodos y campos mediante notación de puntos **

Accediendo al parámetro de página "barra"

    {{.Params.bar}}

** Los paréntesis se pueden usar para agrupar elementos **

    {{if o (isset .Params "alt") (isset .Params "caption")}} Caption {{end}}


## Variables

Cada plantilla go tiene una estructura (objeto) puesta a su disposición. En hugo cada uno
La plantilla se pasa ya sea una página o una estructura de nodo dependiendo de qué tipo de
página que estás renderizando. Más detalles están disponibles en el
[variables](/layout/variables) página.

Se accede a una variable haciendo referencia al nombre de la variable.

    <title> {{.Title}} </title>

Las variables también pueden ser definidas y referenciadas.

    {{$ dirección: = "123 Main St."}}
    {{$ dirección}}

## Funciones

Vaya con la plantilla con algunas funciones que proporcionan una funcionalidad básica. La ida
El sistema de plantillas también proporciona un mecanismo para que las aplicaciones amplíen la
Funciones disponibles con su propio. [Plantilla de Hugo
funciones] (/ diseño / funciones) proporcionan algunas funciones adicionales que creemos
Son útiles para la construcción de sitios web. Las funciones son llamadas usando su nombre
seguido de los parámetros requeridos separados por espacios. Modelo
No se pueden agregar funciones sin volver a compilar hugo.

**Ejemplo:**

    {{add 1 2}}

## incluye

Al incluir otra plantilla le pasaremos los datos que se le
capaz de acceder. Para pasar a lo largo del contexto actual, por favor recuerde
incluye un punto al final. La ubicación de las plantillas siempre comenzará en
El directorio / layout / dentro de Hugo.

**Ejemplo:**

    {{template "chrome / header.html". }}


## Lógica

Las plantillas Go proporcionan la iteración más básica y la lógica condicional.

### Iteración

Al igual que en Go, las plantillas Go hacen un uso intensivo del rango para iterar sobre
Un mapa, matriz o segmento. Los siguientes son diferentes ejemplos de cómo usar
distancia.

**Ejemplo 1: Uso de contexto**

    {{array array}}
        {{. }}
    {{ final }}

**Ejemplo 2: Declaración de valor de nombre de variable**

    {{range $ element: = array}}
        {{$ elemento}}
    {{ final }}

**Ejemplo 2: Declaración de clave y valor nombre de variable**

    {{range $ index, $ element: = array}}
        {{$ index}}
        {{$ elemento}}
    {{ final }}

### Condicionales

Si, si no, con, o, y proporciona el marco para el manejo condicional
Lógica en Go Templates. Al igual que el rango, cada declaración se cierra con `end`.


Las plantillas Go tratan los siguientes valores como falsos:

* falso
* 0
* cualquier matriz, sector, mapa o cadena de longitud cero

**Ejemplo 1: Si**

    {{if isset .Params "title"}} <h4> {{index .Params "title"}} </h4> {{end}}

**Ejemplo 2: Si -> Else**

    {{if isset .Params "alt"}}
        {{index .Params "alt"}}
    {{más}}
        {{index .Params "caption"}}
    {{ final }}

**Ejemplo 3: And & Or**

    {{if y (o (isset .Params "title") (isset .Params "caption")) (isset .Params "attr")}}
