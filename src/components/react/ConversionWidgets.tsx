/**
 * ConversionWidgets - All conversion optimization components in one place
 * Include this component once in your layout to enable all conversion features
 */

import WhatsAppWidget from './WhatsAppWidget'
import ExitIntentPopup from './ExitIntentPopup'
import SocialProofNotification from './SocialProofNotification'
import FloatingCTABar from './FloatingCTABar'

interface ConversionWidgetsProps {
    lang?: string
    enableWhatsApp?: boolean
    enableExitIntent?: boolean
    enableSocialProof?: boolean
    enableFloatingCTA?: boolean
    whatsappNumber?: string
}

const ConversionWidgets = ({
    lang = 'en',
    enableWhatsApp = true,
    enableExitIntent = true,
    enableSocialProof = true,
    enableFloatingCTA = true,
    whatsappNumber = '96170106083'
}: ConversionWidgetsProps) => {
    return (
        <>
            {/* WhatsApp Floating Widget */}
            {enableWhatsApp && (
                <WhatsAppWidget lang={lang} phoneNumber={whatsappNumber} />
            )}

            {/* Exit Intent Popup */}
            {enableExitIntent && (
                <ExitIntentPopup lang={lang} />
            )}

            {/* Real-time Social Proof Notifications */}
            {enableSocialProof && (
                <SocialProofNotification lang={lang} />
            )}

            {/* Floating CTA Bar on Scroll */}
            {enableFloatingCTA && (
                <FloatingCTABar lang={lang} />
            )}
        </>
    )
}

export default ConversionWidgets
