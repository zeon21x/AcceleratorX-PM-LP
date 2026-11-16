import { useRef, useState } from 'react';

export default function ApplicationForm({
  idPrefix = 'hero',
  titleId,
  className = '',
  inputRef,
  onSubmitSuccess,
}) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    background: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }
    // Front-end demonstration only: connect this handler to the admissions CRM/API before publishing.
    onSubmitSuccess(formData);
    setFormData({ name: '', phone: '', email: '', background: '' });
  };

  const nameId = `${idPrefix}-name`;
  const phoneId = `${idPrefix}-phone`;
  const emailId = `${idPrefix}-email`;
  const bgId = `${idPrefix}-background`;

  return (
    <div
      id={idPrefix === 'hero' ? 'apply' : undefined}
      className={`rounded-[9px] border border-[rgba(152,188,255,0.35)] bg-[#f8fbff] p-5 text-[#10213e] shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-[24px] ${className}`}
    >
      <h2
        id={titleId}
        className="mb-[6px] text-[21px] font-bold leading-[1.2] text-[#10213e]"
      >
        Start your application
      </h2>
      <p className="mb-[14px] text-[12px] leading-[1.35] text-[#687b9b]">
        Share your details and speak with an AcceleratorX program advisor.
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="my-[10px]">
          <label
            htmlFor={nameId}
            className="mb-[5px] block text-[11px] font-bold text-[#233c60]"
          >
            Full name
          </label>
          <input
            ref={inputRef}
            id={nameId}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full rounded-[5px] border border-[#d5e0f1] bg-white px-[11px] py-[10px] text-[16px] leading-[1.5] text-[#10213e] outline-[#3478f6] placeholder:text-[#757575]"
          />
        </div>

        <div className="my-[10px]">
          <label
            htmlFor={phoneId}
            className="mb-[5px] block text-[11px] font-bold text-[#233c60]"
          >
            Phone number
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-[5px] border border-[#d5e0f1] bg-white px-[11px] py-[10px] text-[16px] leading-[1.5] text-[#10213e] outline-[#3478f6] placeholder:text-[#757575]"
          />
        </div>

        <div className="my-[10px]">
          <label
            htmlFor={emailId}
            className="mb-[5px] block text-[11px] font-bold text-[#233c60]"
          >
            Email address
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-[5px] border border-[#d5e0f1] bg-white px-[11px] py-[10px] text-[16px] leading-[1.5] text-[#10213e] outline-[#3478f6] placeholder:text-[#757575]"
          />
        </div>

        <div className="my-[10px]">
          <label
            htmlFor={bgId}
            className="mb-[5px] block text-[11px] font-bold text-[#233c60]"
          >
            Current status
          </label>
          <select
            id={bgId}
            name="background"
            value={formData.background}
            onChange={handleChange}
            required
            className="w-full rounded-[5px] border border-[#d5e0f1] bg-white px-[11px] py-[10px] text-[16px] leading-[1.5] text-[#10213e] outline-[#3478f6]"
          >
            <option value="">Select one</option>
            <option value="Student">Student</option>
            <option value="Recent graduate">Recent graduate</option>
            <option value="Working professional">Working professional</option>
            <option value="Aspiring product manager">Aspiring product manager</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-[7px] inline-flex w-full cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[15px] py-[11px] text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)]"
        >
          Request a callback
        </button>

        <div className="mt-[10px] text-center text-[10px] leading-[1.25] text-[#687b9b]">
          By submitting, you agree to be contacted about the program.
        </div>
      </form>
    </div>
  );
}
