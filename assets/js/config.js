/* =====================================================================
   RAÍZ DECO — DATOS DEL SITIO
   Este es el único archivo que tenés que editar para actualizar la web.
   ===================================================================== */

// 1) Tu número de WhatsApp Business: sin "+", sin espacios ni guiones.
//    Ejemplo Buenos Aires (celular): 5491122334455
const WHATSAPP_NUMBER = "5491133213564";

// 2) Productos. Para agregar uno, copiá una línea y cambiá los datos.
//    - category: tiene que escribirse igual en todos los productos de esa categoría.
//    - price: número, sin puntos ni signo $ (ej: 35000).
//    - image: ruta de la foto dentro de la carpeta img/ (cuadrada 1:1, JPG).
//      Si la foto todavía no existe, se muestra un recuadro vacío.
const PRODUCTS = [
  { name: "Adonai", desc: "Bastidor bordado de 20cm.", category: "Bastidores bordados", price: 35000, image: "img/ADONAI.jpg" },
  { name: "Jireh", desc: "Bastidor bordado de 20cm.", category: "Bastidores bordados", price: 35000, image: "img/JIREH.jpg" },
  { name: "Rafa", desc: "Bastidor bordado de 20cm.", category: "Bastidores bordados", price: 35000, image: "img/RAFA.jpg" },
  { name: "Shaddai", desc: "Bastidor bordado de 20cm.", category: "Bastidores bordados", price: 35000, image: "img/SHADDAI.jpg" },
  { name: "Yahweh", desc: "Bastidor bordado de 20cm.", category: "Bastidores bordados", price: 35000, image: "img/YAHWEH.jpg" },
  { name: "Child of God", desc: "Cuadro box 20x20cm con fondo cuadrille", category: "Cuadros box", price: 35000, image: "img/CHILD-BOX.jpg" },
  { name: "En paz me acostare", desc: "Cuadro box 20x20cm con fondo cuadrille", category: "Cuadros box", price: 35000, image: "img/EN-PAZ-BOX.jpg" },
  { name: "La fé mueve montañas", desc: "Cuadro box 20x20cm con fondo cuadrille", category: "Cuadros box", price: 35000, image: "img/LA-FE-MUEVE-BOX.jpg" },
  { name: "Un día a la vez", desc: "Cuadro box 20x20cm con fondo cuadrille", category: "Cuadros box", price: 35000, image: "img/UN-DIA-BOX.jpg" },
  { name: "Dios siempre cumple sus promesas", desc: "Cuadro box 21x30cm con fondo cuadrille.", category: "Cuadros 21×30", price: 35000, image: "img/DIOS-SIEMPRE-CUADRO.jpg" },
  { name: "En paz me acostaré", desc: "Cuadro box 21x30cm con fondo cuadrille.", category: "Cuadros 21×30", price: 35000, image: "img/EN-PAZ-CUADRO.jpg" },
  { name: "Todo lo hizo hermoso a su tiempo", desc: "Cuadro box 21x30cm con fondo cuadrille.", category: "Cuadros 21×30", price: 35000, image: "img/TODO-HERMOSO.jpg" },
  { name: "En paz me acostaré", desc: "Almohadon y bordado hechos a mano de 40x30 cm", category: "Almohadones", price: 40000, image: "img/AlmohadonBordado.jpg" },
  { name: "Bordado personalizado", desc: "Bastidor bordado con nombre personalizado de 20cm", category: "Bastidores bordados", price: 35000, image: "img/NOMBRE-PERSONALIZADO-BASTIDOR.jpg" },
  { name: "Jesús es la razón + Bebé", desc: "Bastidor simil madera de 21cm bordado sobre tela bordo",category: "Navidad", price: 30000, image: "img/21-bordo.jpg" },
  { name: "Jesús es la razón + Pesebre", desc: "Bastidor simil madera de 21cm bordado sobre tela verde", category: "Navidad", price: 30000, image: "img/21-verde.jpg" },
  { name: "Ha nacido el Salvador", desc: "Bastidor de 9.5 cm, bordado sobre tela bordo. Pack x 3.", category: "Navidad", price: 25000, image: "img/1-bordo.jpg" },
  { name: "Jesús es la razón", desc: "Bastidor de 9.5 cm, bordado sobre tela bordo. Pack x 3.", category: "Navidad", price: 25000, image: "img/2-bordo.jpg" },
  { name: "Navidad es Jesús", desc: "Bastidor de 9.5 cm, bordado sobre tela bordo. Pack x 3.", category: "Navidad", price: 25000, image: "img/3-bordo.jpg" },
  { name: "Pesebre", desc: "Bastidor de 9.5 cm, bordado sobre tela bordo. Pack x 3.", category: "Navidad", price: 25000, image: "img/4-bordo.jpg" },
  { name: "Ha nacido el Salvador", desc: "Bastidor de 9.5 cm, bordado sobre tela verde. Pack x 3.", category: "Navidad", price: 25000, image: "img/1-verde.jpg" },
  { name: "Jesús es la razón", desc: "Bastidor de 9.5 cm, bordado sobre tela verde. Pack x 3.", category: "Navidad", price: 25000, image: "img/2-verde.jpg" },
  { name: "Navidad es Jesús", desc: "Bastidor de 9.5 cm, bordado sobre tela verde. Pack x 3.", category: "Navidad", price: 25000, image: "img/3-verde.jpg" },
  { name: "Pesebre", desc: "Bastidor de 9.5 cm, bordado sobre tela verde. Pack x 3.", category: "Navidad", price: 25000, image: "img/4-verde.jpg" },
];
