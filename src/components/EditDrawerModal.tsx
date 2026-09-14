import React, { useState } from 'react';
import { PortfolioData } from '../types';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';

interface EditDrawerModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
  onClose: () => void;
}

export const EditDrawerModal: React.FC<EditDrawerModalProps> = ({
  isOpen,
  data,
  onSave,
  onReset,
  onClose,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'personal' | 'stats'>('personal');
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  // Sync state if modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData(data);
    }
  }, [isOpen, data]);

  if (!isOpen) return null;

  const handlePersonalChange = (field: keyof typeof formData.personal, val: any) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: val,
      },
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsSavedNotice(true);
    setTimeout(() => {
      setIsSavedNotice(false);
      onClose();
    }, 600);
  };

  const handleReset = () => {
    if (window.confirm('Reset all details to default template?')) {
      onReset();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-neutral-200 rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#fe4300]/10 flex items-center justify-center text-[#fe4300]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-950">
                Customize Portfolio
              </h3>
              <p className="text-xs text-neutral-500">
                Personalize your details, title, and contact links
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors text-neutral-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex px-6 pt-3 border-b border-neutral-200 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('personal')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'personal'
                ? 'border-[#fe4300] text-[#fe4300]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Personal &amp; Contact
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stats')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'stats'
                ? 'border-[#fe4300] text-[#fe4300]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Stats &amp; Languages
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'personal' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.personal.name}
                    onChange={(e) => handlePersonalChange('name', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Professional Role
                  </label>
                  <input
                    type="text"
                    value={formData.personal.role}
                    onChange={(e) => handlePersonalChange('role', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Bio / Tagline
                </label>
                <textarea
                  rows={3}
                  value={formData.personal.bio}
                  onChange={(e) => handlePersonalChange('bio', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.personal.email}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={formData.personal.phone}
                    onChange={(e) => handlePersonalChange('phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Website URL
                </label>
                <input
                  type="text"
                  value={formData.personal.website}
                  onChange={(e) => handlePersonalChange('website', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                />
              </div>
            </>
          )}

          {activeTab === 'stats' && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Years Exp.
                  </label>
                  <input
                    type="text"
                    value={formData.personal.yearsExperience}
                    onChange={(e) =>
                      handlePersonalChange('yearsExperience', e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Happy Clients
                  </label>
                  <input
                    type="text"
                    value={formData.personal.happyClients}
                    onChange={(e) =>
                      handlePersonalChange('happyClients', e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Projects Done
                  </label>
                  <input
                    type="text"
                    value={formData.personal.projectsCompleted}
                    onChange={(e) =>
                      handlePersonalChange('projectsCompleted', e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Languages (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.personal.languages.join(', ')}
                  onChange={(e) =>
                    handlePersonalChange(
                      'languages',
                      e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    )
                  }
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 bg-transparent text-neutral-900 focus:border-[#fe4300] outline-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-red-500 transition-colors"
          >
            <RotateCcw size={13} />
            <span>Reset to Template Default</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-full border border-neutral-300 hover:bg-neutral-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-medium rounded-full bg-[#fe4300] text-white hover:bg-[#e03b00] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              {isSavedNotice ? (
                <>
                  <Check size={14} />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
