/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { CategoriesSection } from './components/CategoriesSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { CatalogSection } from './components/CatalogSection';
import { BeforeAfterComparator } from './components/BeforeAfterComparator';
import { SpaDayCalculator } from './components/SpaDayCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ClinicalModal } from './components/ClinicalModal';
import { CartDrawer } from './components/CartDrawer';
import { TREATMENTS_DATA, TreatmentItem } from './data/treatments';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  // Shopping Cart / Selected Treatments for Spa Day
  const [cartItems, setCartItems] = useState<TreatmentItem[]>([
    TREATMENTS_DATA[0], // Hydrafacial Glow
    TREATMENTS_DATA[1], // Lash Lift
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Active Category filter for the catalog
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modal for clinical details
  const [selectedClinicalTreatment, setSelectedClinicalTreatment] = useState<TreatmentItem | null>(null);

  // Selected treatment for booking form
  const [bookingTreatmentName, setBookingTreatmentName] = useState<string>(
    'Hydrafacial Glow & Infusão'
  );

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3800);
  };

  // Add treatment to cart / bundle
  const handleAddToCart = (item: TreatmentItem) => {
    if (cartItems.some((i) => i.id === item.id)) {
      showToast(`${item.name} já está na sua sacola.`);
      setIsCartOpen(true);
      return;
    }
    setCartItems((prev) => [...prev, item]);
    showToast(`${item.name} adicionado à sua sacola.`);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Toggle item in Spa Day calculator
  const handleToggleSpaItem = (item: TreatmentItem) => {
    if (cartItems.some((i) => i.id === item.id)) {
      setCartItems((prev) => prev.filter((i) => i.id !== item.id));
      showToast(`${item.name} removido do pacote.`);
    } else {
      setCartItems((prev) => [...prev, item]);
      showToast(`${item.name} adicionado com 10% VIP.`);
    }
  };

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle category selection from CategoriesSection (e.g. "shop face", "shop beauty tools", "shop body")
  const handleSelectCategoryFromSection = (categoryName: string) => {
    setActiveCategory(categoryName);
    scrollTo('tratamentos');
    showToast(`Mostrando procedimentos da categoria "${categoryName}"`);
  };

  // Handle quiz recommendation selection
  const handleSelectQuizTreatment = (treatmentName: string) => {
    setBookingTreatmentName(treatmentName);
    scrollTo('agendamento');
    showToast(`Protocolo "${treatmentName}" selecionado para agendamento!`);
  };

  // Handle booking click from any card or modal
  const handleBookTreatment = (treatmentName: string) => {
    setBookingTreatmentName(treatmentName);
    scrollTo('agendamento');
  };

  // Send combo to WhatsApp
  const handleSendWhatsAppBundle = () => {
    if (cartItems.length === 0) return;

    const itemsText = cartItems
      .map((item) => `• ${item.name} (${item.priceFormatted})`)
      .join('\n');

    const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const hasDiscount = cartItems.length >= 2;
    const finalPrice = hasDiscount ? Math.round(subtotal * 0.9) : subtotal;

    const text = `Olá, Lumière Haute Beauté! Gostaria de agendar meu pacote personalizado Spa Day com a cortesia VIP:\n\n✨ *Procedimentos Selecionados:*\n${itemsText}\n\n💰 *Investimento Total:* R$ ${finalPrice} ${
      hasDiscount ? '(com 10% desconto VIP)' : ''
    }\n\nPor favor, me informe as datas e horários disponíveis para esta semana!`;

    const waUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1713] flex flex-col font-sans selection:bg-[#B88A58] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-6 z-50 bg-[#1E1713] text-white px-5 py-3 rounded-full shadow-2xl border border-[#B88A58]/35 text-xs font-medium flex items-center gap-2.5 animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-4 h-4 text-[#E3CDBC]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating WhatsApp Concierge Button */}
      <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <div className="hidden sm:flex bg-white px-4 py-2.5 rounded-full border border-[#E8DCD1] shadow-lg text-xs font-semibold text-[#1E1713] items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#287B5B] inline-block animate-ping" />
          <span>Concierge Online</span>
        </div>
        <a
          href="https://wa.me/5511987654321?text=Ol%C3%A1%20Lumi%C3%A8re!%20Gostaria%20de%20consultar%20disponibilidade%20de%20hor%C3%A1rio."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a concierge no WhatsApp"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(18,140,126,0.4)] hover:scale-105 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </aside>

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onBookClick={() => scrollTo('agendamento')}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection
          onBookClick={() => scrollTo('agendamento')}
          onQuizClick={() => scrollTo('quiz')}
        />

        {/* Trust Authority Pillars Bar */}
        <TrustBar />

        {/* EXACT "Categories" Section as specified in prompt */}
        <CategoriesSection onSelectCategory={handleSelectCategoryFromSection} />

        {/* 3D Skin Diagnostic Quiz */}
        <DiagnosticQuiz onSelectTreatmentForBooking={handleSelectQuizTreatment} />

        {/* Treatments & Boutique Catalog */}
        <CatalogSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenClinicalModal={setSelectedClinicalTreatment}
          onAddToCart={handleAddToCart}
          onBookTreatment={handleBookTreatment}
        />

        {/* Interactive Before & After Comparator */}
        <BeforeAfterComparator onBookClick={() => scrollTo('agendamento')} />

        {/* Monte seu Day Spa Calculator with 10% VIP Perk */}
        <SpaDayCalculator
          selectedItems={cartItems}
          onToggleItem={handleToggleSpaItem}
          onSendWhatsApp={handleSendWhatsAppBundle}
        />

        {/* Verified Patient Reviews & Testimonials */}
        <ReviewsSection />

        {/* Intelligent WhatsApp Concierge Booking Scheduler */}
        <BookingSection
          selectedTreatmentName={bookingTreatmentName}
          onBookingSubmitted={() => showToast('Solicitação enviada com sucesso!')}
        />

        {/* Frequent Inquiries FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Editorial Luxury Footer */}
      <Footer />

      {/* Clinical Details Modal */}
      <ClinicalModal
        treatment={selectedClinicalTreatment}
        onClose={() => setSelectedClinicalTreatment(null)}
        onBookTreatment={handleBookTreatment}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClear={handleClearCart}
        onSendWhatsApp={handleSendWhatsAppBundle}
      />
    </div>
  );
}
