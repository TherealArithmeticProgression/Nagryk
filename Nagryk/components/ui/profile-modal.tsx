'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Xmark } from 'iconoir-react'

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  // Hardcoded user data as per design requirements
  const user = {
    name: 'Satveer',
    dob: '10-12-1968',
    age: '57',
    profession: 'Farmer',
    skills: 'Gardening , Farming, Livestock',
    image: '/profile_placeholder.png', // We will use a placeholder or the uploaded image if I can process it, for now a placeholder path
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              >
                <Xmark className="h-6 w-6" strokeWidth={2.5} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative h-48 w-40 overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm">
                    {/* Using a generic avatar if image not found, or maybe an icon */}
                    <img
                      src="/user-profile.png"
                      alt="Profile"
                      className="h-full w-full object-cover bg-slate-50"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-2/3 space-y-6 pt-2">
                  <div className="space-y-4">
                    <div className="grid grid-cols-[100px_20px_1fr] items-center text-lg">
                      <span className="font-medium text-slate-900">Name</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-slate-600 font-medium">
                        {user.name}
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_20px_1fr] items-center text-lg">
                      <span className="font-medium text-slate-900">DOB</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-slate-600 font-medium">
                        {user.dob}
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_20px_1fr] items-center text-lg">
                      <span className="font-medium text-slate-900">Age</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-slate-600 font-medium">
                        {user.age}
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_20px_1fr] items-center text-lg">
                      <span className="font-medium text-slate-900">
                        Profession
                      </span>
                      <span className="text-slate-400">:</span>
                      <span className="text-slate-600 font-medium">
                        {user.profession}
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_20px_1fr] items-center text-lg">
                      <span className="font-medium text-slate-900">Skills</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-slate-600 font-medium">
                        {user.skills}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
