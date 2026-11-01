import React from 'react';
import { useAppContext } from '../context/AppContext';
import { X, CheckCircle, Info, AlertTriangle, AlertCircle } from 'lucide-react';

const Toast = () => {
  const { toasts, removeToast } = useAppContext();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let bgColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        let Icon = CheckCircle;

        if (toast.type === 'info') {
          bgColor = 'bg-blue-50 text-blue-800 border-blue-200';
          Icon = Info;
        } else if (toast.type === 'warning') {
          bgColor = 'bg-amber-50 text-amber-800 border-amber-200';
          Icon = AlertTriangle;
        } else if (toast.type === 'error') {
          bgColor = 'bg-rose-50 text-rose-800 border-rose-200';
          Icon = AlertCircle;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg transition-all duration-300 transform translate-y-0 scale-100 ${bgColor}`}
            style={{
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            <Icon className="w-5 h-5 mt-0.5 shrink-0" />
            <div className="flex-1 text-sm font-medium">{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-0.5 hover:bg-black/5 rounded-full shrink-0 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
