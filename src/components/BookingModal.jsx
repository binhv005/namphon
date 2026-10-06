import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, Phone, Calendar, User, Users, MessageSquare } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const BookingModal = ({ isOpen, onClose, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '2',
    roomType: 'Tự do chọn / Cần tư vấn',
    note: ''
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen && initialData) {
      setFormData((prev) => ({
        ...prev,
        checkInDate: initialData.checkIn || prev.checkInDate,
        checkOutDate: initialData.checkOut || prev.checkOutDate,
        guests: initialData.guests || prev.guests,
        roomType: initialData.roomType || prev.roomType
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Vui lòng nhập Họ và tên.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Vui lòng nhập Số điện thoại liên hệ.');
      return;
    }
    if (!formData.checkInDate) {
      setErrorMessage('Vui lòng chọn Ngày nhận phòng.');
      return;
    }
    if (!formData.checkOutDate) {
      setErrorMessage('Vui lòng chọn Ngày trả phòng.');
      return;
    }
    if (new Date(formData.checkInDate) > new Date(formData.checkOutDate)) {
      setErrorMessage('Ngày trả phòng phải sau ngày nhận phòng.');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  const handleClose = () => {
    setFormStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px 30px',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-main)'
          }}
          aria-label="Đóng"
        >
          <X size={20} />
        </button>

        {formStatus === 'success' ? (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(23, 61, 48, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                color: 'var(--color-teal-primary)'
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--color-teal-dark)', marginBottom: '10px' }}>
              Gửi yêu cầu thành công!
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Cảm ơn quý khách <strong>{formData.fullName}</strong>. Quản lý <strong>{homestayData.booking.contactPerson}</strong> ({homestayData.booking.formattedPhone}) sẽ liên hệ xác nhận phòng trong ít phút.
            </p>

            <button onClick={handleClose} className="btn-boutique btn-teal" style={{ width: '100%', padding: '14px' }}>
              Đóng cửa sổ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <span className="eyebrow" style={{ color: 'var(--color-teal-primary)', marginBottom: '4px' }}>
                NamPhon Homestay - Huế
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                Đặt phòng / Nhận tư vấn
              </h3>
            </div>

            {errorMessage && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: '#fde8e8',
                  borderRadius: 'var(--radius-xs)',
                  color: '#9b1c1c',
                  fontSize: '0.84rem',
                  marginBottom: '16px'
                }}
              >
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0941821906"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Ngày nhận phòng *
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Ngày trả phòng *
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Số khách
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="1">1 Khách</option>
                  <option value="2">2 Khách</option>
                  <option value="3">3 Khách</option>
                  <option value="4">4 Khách</option>
                  <option value="5+">5+ Khách</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Loại phòng quan tâm
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="Tự do chọn / Cần tư vấn">Tự do chọn / Cần tư vấn</option>
                  {homestayData.rooms.map((r) => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Nội dung cần tư vấn thêm
              </label>
              <textarea
                name="note"
                rows="2"
                placeholder="Yêu cầu nhận phòng sớm, cẩm nang foodtour..."
                value={formData.note}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid #d1d5db',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="btn-boutique btn-teal"
              style={{ width: '100%', padding: '14px', fontSize: '0.92rem' }}
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Đang gửi yêu cầu...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>GỬI YÊU CẦU ĐẶT PHÒNG</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
