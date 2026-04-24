"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"

// Types
type Product = {
  id: number
  name: string
  price: number
  originalPrice: number
  category: "joysticks" | "componentes" | "accesorios"
  images: string[]
  description: string
  available: boolean
  lowStock: boolean
}

// Product data
const products: Product[] = [
  {
    id: 1,
    name: "Joystick Manba One V2",
    price: 75000,
    originalPrice: 80000,
    category: "joysticks",
    images: [
      "https://www.hlplanet.com/storage/2024/11/ManbaOneV2Controller-2-1024x576.webp",
      "https://picsum.photos/seed/joystick1b/800/600",
      "https://picsum.photos/seed/joystick1c/800/600",
      "https://picsum.photos/seed/joystick1d/800/600",
    ],
    description: "Joystick inalámbrico de alta precisión con conexión Bluetooth 5.0 y batería de larga duración. Compatible con PC, PlayStation y Nintendo Switch. Incluye vibración HD y gatillos adaptativos.",
    available: true,
    lowStock: true,
  },
  {
    id: 2,
    name: "Joystick RGB Gaming Controller",
    price: 32500,
    originalPrice: 38900,
    category: "joysticks",
    images: [
      "https://picsum.photos/seed/joystick2a/800/600",
      "https://picsum.photos/seed/joystick2b/800/600",
      "https://picsum.photos/seed/joystick2c/800/600",
      "https://picsum.photos/seed/joystick2d/800/600",
    ],
    description: "Control con iluminación RGB personalizable y 16 millones de colores. Cable trenzado de 2 metros, botones mecánicos y grip antideslizante para sesiones de juego intensas.",
    available: true,
    lowStock: false,
  },
  {
    id: 3,
    name: "Joystick Retro USB Classic",
    price: 18990,
    originalPrice: 22990,
    category: "joysticks",
    images: [
      "https://picsum.photos/seed/joystick3a/800/600",
      "https://picsum.photos/seed/joystick3b/800/600",
      "https://picsum.photos/seed/joystick3c/800/600",
      "https://picsum.photos/seed/joystick3d/800/600",
    ],
    description: "Diseño retro inspirado en los clásicos de los 90. Conexión USB plug & play, compatible con emuladores y juegos retro. Ideal para nostálgicos del gaming.",
    available: false,
    lowStock: false,
  },
  {
    id: 4,
    name: "Memoria RAM DDR5 16GB 5600MHz",
    price: 89900,
    originalPrice: 109900,
    category: "componentes",
    images: [
      "https://picsum.photos/seed/ram1a/800/600",
      "https://picsum.photos/seed/ram1b/800/600",
      "https://picsum.photos/seed/ram1c/800/600",
      "https://picsum.photos/seed/ram1d/800/600",
    ],
    description: "Memoria RAM de última generación DDR5 con velocidad de 5600MHz. Disipador de aluminio de bajo perfil, iluminación RGB sincronizable y latencia optimizada para gaming. ",
    available: true,
    lowStock: false,
  },
  {
    id: 5,
    name: "SSD NVMe 1TB Gen4",
    price: 75500,
    originalPrice: 89900,
    category: "componentes",
    images: [
      "https://picsum.photos/seed/ssd1a/800/600",
      "https://picsum.photos/seed/ssd1b/800/600",
      "https://picsum.photos/seed/ssd1c/800/600",
      "https://picsum.photos/seed/ssd1d/800/600",
    ],
    description: "Unidad de estado sólido NVMe PCIe 4.0 con velocidades de lectura de hasta 7000MB/s. Ideal para gaming y edición de video. Incluye disipador térmico.",
    available: true,
    lowStock: true,
  },
  {
    id: 6,
    name: "Fuente 750W 80 Plus Gold",
    price: 125000,
    originalPrice: 145000,
    category: "componentes",
    images: [
      "https://picsum.photos/seed/psu1a/800/600",
      "https://picsum.photos/seed/psu1b/800/600",
      "https://picsum.photos/seed/psu1c/800/600",
      "https://picsum.photos/seed/psu1d/800/600",
    ],
    description: "Fuente de poder modular certificada 80 Plus Gold. Ventilador silencioso de 140mm, cables negros trenzados y protecciones múltiples. 5 años de garantía.",
    available: true,
    lowStock: false,
  },
  {
    id: 7,
    name: "Auriculares Gaming 7.1 Surround",
    price: 28900,
    originalPrice: 35900,
    category: "accesorios",
    images: [
      "https://picsum.photos/seed/headset1a/800/600",
      "https://picsum.photos/seed/headset1b/800/600",
      "https://picsum.photos/seed/headset1c/800/600",
      "https://picsum.photos/seed/headset1d/800/600",
    ],
    description: "Auriculares con sonido envolvente 7.1 virtual, micrófono retráctil con cancelación de ruido, almohadillas de memory foam y RGB personalizable. Compatibles con PC y consolas.",
    available: true,
    lowStock: false,
  },
  {
    id: 8,
    name: "Mouse Pad XXL RGB 90x40cm",
    price: 15900,
    originalPrice: 19900,
    category: "accesorios",
    images: [
      "https://picsum.photos/seed/mousepad1a/800/600",
      "https://picsum.photos/seed/mousepad1b/800/600",
      "https://picsum.photos/seed/mousepad1c/800/600",
      "https://picsum.photos/seed/mousepad1d/800/600",
    ],
    description: "Alfombrilla gaming extragrande con iluminación RGB perimetral y 12 modos de luz. Superficie de microtextura optimizada para sensores ópticos y láser. Base antideslizante.",
    available: true,
    lowStock: true,
  },
  {
    id: 9,
    name: "Soporte Monitor Dual Articulado",
    price: 42500,
    originalPrice: 52500,
    category: "accesorios",
    images: [
      "https://picsum.photos/seed/stand1a/800/600",
      "https://picsum.photos/seed/stand1b/800/600",
      "https://picsum.photos/seed/stand1c/800/600",
      "https://picsum.photos/seed/stand1d/800/600",
    ],
    description: "Soporte de escritorio para dos monitores de hasta 32 pulgadas. Brazos articulados con gestión de cables integrada. Ajuste de altura, inclinación y rotación 360°.",
    available: false,
    lowStock: false,
  },
]

// Price formatter
const formatPrice = (n: number) => "$" + n.toLocaleString("es-AR")

// SVG Icons
const LightningIcon = () => (
  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const MessengerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
)

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

// WhatsApp URL
const WHATSAPP_NUMBER = "5491100000000"
const getWhatsAppUrl = (productName?: string) => {
  const message = productName
    ? `Hola! Me interesa el producto ${productName}`
    : "Hola! Me interesa conocer más sobre sus productos"
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const FACEBOOK_URL = "https://m.me/gamebit"

export default function GameBitPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<"todos" | Product["category"]>("todos")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isDrawerOpen = selectedProduct !== null

  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter((p) => p.category === activeCategory)

  const openProductDrawer = (product: Product) => {
    setSelectedProduct(product)
    setSelectedImageIndex(0)
  }

  const closeDrawer = () => {
    setSelectedProduct(null)
    setSelectedImageIndex(0)
  }

  const categoryLabels: Record<"todos" | Product["category"], string> = {
    todos: "Todos",
    joysticks: "Joysticks",
    componentes: "Componentes",
    accesorios: "Accesorios",
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navLinkClass = "hover:text-[#f00] transition-colors font-semibold"

  return (
    <div className="min-h-screen bg-surface-page">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-surface-page border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
              <LightningIcon />
              <span className="text-xl font-bold text-content-primary">GameBit</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("hero")} className={navLinkClass}>
                Inicio
              </button>
              <button onClick={() => scrollToSection("productos")} className={navLinkClass}>
                Productos
              </button>
              <button onClick={() => scrollToSection("contacto")} className={navLinkClass}>
                Contacto
              </button>
            </div>

            {/* Desktop WhatsApp Button */}
            {/* <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-status-available text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Contactar por WhatsApp
              <WhatsAppIcon className="w-4 h-4" />
            </a>
 */}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-content-primary"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-surface-border bg-surface-page">
            <div className="px-4 py-4 flex flex-col gap-4">
              <button onClick={() => { scrollToSection("hero"); setMobileMenuOpen(false) }} className={navLinkClass}>
                Inicio
              </button>
              <button onClick={() => { scrollToSection("productos"); setMobileMenuOpen(false) }} className={navLinkClass}>
                Productos
              </button>
              <button onClick={() => { scrollToSection("contacto"); setMobileMenuOpen(false) }} className={navLinkClass}>
                Contacto
              </button>
              {/* <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-status-available text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Contactar por WhatsApp
              </a> */}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative w-full" id="hero">
        <a aria-label="Ver productos">
          <div
            className="w-full bg-bottom-left md:bg-center"
            style={{
              backgroundImage: "url('/heros.webp')",
              backgroundSize: "cover",
              backgroundPosition: "",
              height: "900px",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <motion.div className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="text-white/70 text-md sm:text-base font-medium tracking-widest uppercase mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.07, ease: "easeOut" }}
                >
                  GameBit
                </motion.p>
                <motion.h2
                  className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
                >
                  TODO PARA TU PC
                </motion.h2>
                <motion.h2
                  className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                >
                  Y TU SETUP GAMER
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </a>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-12 sm:py-16 bg-surface-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-content-primary mb-8 text-center sm:text-left">
            Nuestros productos
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(["todos", "joysticks", "componentes", "accesorios"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors cursor-pointer ${activeCategory === cat
                  ? "bg-brand-primary text-white"
                  : "bg-surface-card text-content-secondary hover:text-content-primary"
                  }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => openProductDrawer(product)}
                className="flex flex-col bg-surface-card rounded-lg overflow-hidden text-left hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                <div className="w-full h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-normal text-content-primary line-clamp-2 min-h-[3.5rem] text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xl font-bold tracking-wide text-black">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-2">
                    {!product.available ? (
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-content-muted/20 text-content-muted">
                        Sin stock
                      </span>
                    ) : product.lowStock ? (
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-status-low/15 text-status-low">
                        Últimas unidades
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-status-available/15 text-status-available">
                        Disponible
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-content-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="text-xl font-bold">GameBit</span>
          </div>
          <p className="text-white/70 mb-6">Tu tienda gamer de confianza</p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com/gamebit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

          <p className="text-white/50 text-sm">
            © 2025 GameBit. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {!isDrawerOpen && (
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-status-available text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Contactar por WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-status-available animate-ping opacity-25" />
          <WhatsAppIcon className="w-6 h-6 relative" />
        </a>
      )}

      {/* Product Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
        <SheetContent
          side="right"
          className="w-full lg:w-[42%] lg:max-w-none p-0 overflow-y-auto bg-surface-page border-l border-surface-border [&>button]:w-8 [&>button]:h-8 [&>button]:top-4 [&>button]:right-4 [&>button>svg]:w-8 [&>button>svg]:h-8 [&>button]:bg-white [&>button]:rounded-full"
        >
          {selectedProduct && (
            <div className="flex flex-col h-full">
              <SheetHeader className="sr-only">
                <SheetTitle>{selectedProduct.name}</SheetTitle>
              </SheetHeader>

              <div className="p-4 sm:p-6 flex flex-col gap-6 flex-1">
                {/* Image Gallery */}
                <div className="space-y-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={selectedProduct.images[selectedImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    {selectedProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors ${idx === selectedImageIndex
                          ? "border-brand-primary"
                          : "border-surface-border hover:border-content-muted"
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${selectedProduct.name} - imagen ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-content-primary">
                    {selectedProduct.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl font-bold">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    <span className="text-content-muted line-through">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  </div>

                  <div className="mt-3">
                    {!selectedProduct.available ? (
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded bg-content-muted/20 text-content-muted">
                        Sin stock
                      </span>
                    ) : selectedProduct.lowStock ? (
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded bg-status-low/10 text-status-low">
                        Últimas unidades
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded bg-status-available/10 text-status-available">
                        Disponible
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-content-secondary leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <Separator className="bg-surface-border" />

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-status-available text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <WhatsAppIcon />
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-surface-border text-content-primary py-3 rounded-lg font-medium hover:bg-surface-card transition-colors"
                  >
                    <MessengerIcon />
                    Escribir por Facebook
                  </a>
                  <p className="text-center text-content-muted text-sm">
                    💬 Respondemos en menos de 1 hora
                  </p>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
