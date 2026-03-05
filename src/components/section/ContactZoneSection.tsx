"use client"

import { useState } from "react"
import { ConsultationModal } from "@/components/shared/ConsultationModal"
import { StickyConsultButton } from "@/components/shared/StickyConsultButton"
import { FloatingContactButtons } from "@/components/shared/FloatingContactButtons"

export function ContactZoneSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			{/* Consultation Modal */}
      		<ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

      		{/* Sticky Consult Button */}
      		{!isModalOpen && <StickyConsultButton onClick={() => setIsModalOpen(true)} />}

      		{/* Floating Contact Buttons */}
      		{!isModalOpen && <FloatingContactButtons />}
		</div>
	)
}