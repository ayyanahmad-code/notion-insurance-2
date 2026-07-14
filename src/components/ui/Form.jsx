import { useState } from 'react';
import Button from './Button';

export const Input = ({ label, type = 'text', error, className = '', ...props }) => (
  <div className={`mb-4 ${className}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
    )}
    <input
      type={type}
      className={`
        w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
        ${error ? 'border-red-500' : 'border-gray-300 focus:border-primary'}
      `}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export const Textarea = ({ label, error, className = '', ...props }) => (
  <div className={`mb-4 ${className}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
    )}
    <textarea
      className={`
        w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
        ${error ? 'border-red-500' : 'border-gray-300 focus:border-primary'}
      `}
      rows="4"
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export const Form = ({ onSubmit, children, className = '' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
};