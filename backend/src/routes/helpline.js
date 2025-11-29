const express = require('express')
const { body, validationResult } = require('express-validator')
const { protect } = require('../middleware/auth')
const router = express.Router()

// Simple AI-powered helpline responses
// In production, this would integrate with an AI service like OpenAI, Anthropic, etc.
const aiResponses = {
  greeting: [
    "Hello, I'm here to help you. You're safe, and everything you share is confidential.",
    "Hi there. I'm an AI assistant here to support you. How can I help you today?",
    "Welcome. I'm here to listen and help. What would you like to talk about?"
  ],
  support: [
    "I understand this is difficult. You're not alone, and there are people who want to help you.",
    "It takes courage to reach out. I'm here to support you through this.",
    "Your feelings are valid. Let's work together to find the support you need."
  ],
  resources: [
    "I can help connect you with local support services. Would you like information about counseling, legal aid, or emergency shelters?",
    "There are several resources available: crisis hotlines, counseling services, legal support, and medical care. Which would be most helpful right now?",
    "I can provide you with contact information for support services in your area. What type of support are you looking for?"
  ],
  emergency: [
    "If you're in immediate danger, please call 1195 or your local emergency number right away.",
    "For emergencies, dial 1195 immediately. Your safety is the top priority.",
    "If you're in immediate danger, please contact emergency services at 1195 right now."
  ],
  default: [
    "I'm here to help. Can you tell me more about what you're experiencing?",
    "I understand. Let's explore what support options might be helpful for you.",
    "Thank you for sharing. How can I best support you right now?"
  ]
}

// Simple keyword-based response selection
function getAIResponse(message) {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)]
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('need')) {
    return aiResponses.support[Math.floor(Math.random() * aiResponses.support.length)]
  }
  
  if (lowerMessage.includes('resource') || lowerMessage.includes('service') || lowerMessage.includes('counseling') || lowerMessage.includes('legal')) {
    return aiResponses.resources[Math.floor(Math.random() * aiResponses.resources.length)]
  }
  
  if (lowerMessage.includes('emergency') || lowerMessage.includes('danger') || lowerMessage.includes('urgent') || lowerMessage.includes('immediate')) {
    return aiResponses.emergency[Math.floor(Math.random() * aiResponses.emergency.length)]
  }
  
  return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)]
}

// @route   POST /api/helpline/chat
// @desc    AI-powered helpline chat
// @access  Private
router.post('/chat', protect, [
  body('message').trim().isLength({ min: 1 }).withMessage('Message is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { message } = req.body
    
    // Get AI response
    const aiResponse = getAIResponse(message)
    
    // In production, you would integrate with an actual AI service here
    // Example: OpenAI, Anthropic Claude, etc.
    // const aiResponse = await openaiService.getResponse(message, req.user)

    res.json({
      message: aiResponse,
      timestamp: new Date().toISOString(),
      suggestions: [
        "Get information about local support services",
        "Learn about your legal rights",
        "Find emergency contacts",
        "Access counseling resources"
      ]
    })

  } catch (error) {
    console.error('Helpline chat error:', error)
    res.status(500).json({ 
      message: 'Failed to process message',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// @route   GET /api/helpline/resources
// @desc    Get helpline resources
// @access  Public
router.get('/resources', async (req, res) => {
  try {
    const resources = [
      {
        name: "National GBV Helpline",
        phone: "0800 720 565",
        available: "24/7",
        description: "Free, confidential support for gender-based violence",
        type: "crisis"
      },
      {
        name: "Emergency Services",
        phone: "1195",
        available: "24/7",
        description: "For immediate danger or emergencies",
        type: "emergency"
      },
      {
        name: "Crisis Counseling",
        phone: "0800-123-456",
        available: "24/7",
        description: "Trauma-informed counseling and support",
        type: "counseling"
      },
      {
        name: "Legal Aid Services",
        phone: "0800-789-012",
        available: "Mon-Fri 8am-5pm",
        description: "Free legal advice and representation",
        type: "legal"
      },
      {
        name: "Medical Support",
        phone: "0800-345-678",
        available: "24/7",
        description: "Medical care and forensic examination services",
        type: "medical"
      }
    ]

    res.json({ resources })

  } catch (error) {
    console.error('Get resources error:', error)
    res.status(500).json({ 
      message: 'Failed to get resources',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

module.exports = router

