import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import { User, Mail, Phone, MapPin, Plus, Trash2, CheckCircle2, ArrowLeft } from 'lucide-react';

const ProfilePage = () => {
  const { user, updateProfile, saveAddress, deleteAddress, logout } = useAppContext();
  const navigate = useNavigate();

  // Redirect to login if no session
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Personal Info form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  // Address form states
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressId, setAddressId] = useState('');
  const [addrName, setAddrName] = useState('');
  const [addrMobile, setAddrMobile] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [pincode, setPincode] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  // Sync state
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setMobile(user.mobile || '');
    }
  }, [user]);

  if (!user) return null;

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email, mobile });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();

    if (!addrName || !addrMobile || !addressLine || !city || !stateName || !pincode) {
      alert("Please fill out all address details.");
      return;
    }

    const payload = {
      fullName: addrName,
      mobile: addrMobile,
      addressLine,
      city,
      state: stateName,
      pincode,
      isDefault
    };

    if (addressId) {
      payload.id = addressId;
    }

    saveAddress(payload);
    resetAddressForm();
  };

  const resetAddressForm = () => {
    setShowAddressForm(false);
    setAddressId('');
    setAddrName('');
    setAddrMobile('');
    setAddressLine('');
    setCity('');
    setStateName('');
    setPincode('');
    setIsDefault(false);
  };

  const handleEditAddress = (addr) => {
    setAddressId(addr.id);
    setAddrName(addr.fullName);
    setAddrMobile(addr.mobile);
    setAddressLine(addr.addressLine);
    setCity(addr.city);
    setStateName(addr.state);
    setPincode(addr.pincode);
    setIsDefault(addr.isDefault || false);
    setShowAddressForm(true);
  };

  const handleMakeDefault = (addr) => {
    saveAddress({ ...addr, isDefault: true });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred">
          My Profile & Settings
        </h1>
        <p className="text-xs text-gray-500 font-light mt-1">
          Manage your account particulars and shipping destination book.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Navigation Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/categories')}
            className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm mb-2 transition-colors group cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Explore Categories</span>
          </button>

          {/* Section 1: Account Particulars Form */}
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm">
            <h3 className="font-serif text-base font-bold text-deepred border-b border-marigold/10 pb-3 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-saffron" />
              <span>Personal Details</span>
            </h3>

            <form onSubmit={handleInfoSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-gray-700">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="profName">Full Name</label>
                <input
                  type="text"
                  id="profName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="profEmail">Email Address</label>
                <input
                  type="email"
                  id="profEmail"
                  disabled
                  value={email}
                  className="border border-marigold/30 bg-gray-50 rounded-lg py-2.5 px-3 outline-none text-gray-400 font-sans cursor-not-allowed"
                />
                <span className="text-[9px] text-gray-400 font-light -mt-1 pl-1">Email cannot be modified for demo account.</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="profMobile">Mobile Number</label>
                <input
                  type="tel"
                  id="profMobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-deepred hover:bg-deepred-light text-white font-bold py-2.5 px-6 rounded-lg transition active:scale-95 text-xs cursor-pointer shadow-sm"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>

          {/* Section 2: Address Book Management */}
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-marigold/10 pb-3 mb-4">
              <h3 className="font-serif text-base font-bold text-deepred flex items-center gap-2">
                <MapPin className="w-5 h-5 text-saffron" />
                <span>Saved Addresses</span>
              </h3>
              {!showAddressForm && (
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="inline-flex items-center gap-1 bg-saffron hover:bg-saffron-dark text-white py-1.5 px-4 rounded-xl font-bold text-xs transition active:scale-95 shadow-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Address</span>
                </button>
              )}
            </div>

            {/* Address creation form */}
            {showAddressForm && (
              <div className="border border-marigold/35 rounded-2xl p-5 mb-6 bg-cream-light/35">
                <h4 className="font-serif text-sm font-bold text-deepred mb-4">
                  {addressId ? 'Edit Address Details' : 'Add New Address'}
                </h4>
                <form onSubmit={handleAddressSubmit} className="flex flex-col gap-4 text-xs font-medium text-gray-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label>Recipient Name</label>
                      <input
                        type="text"
                        required
                        value={addrName}
                        onChange={(e) => setAddrName(e.target.value)}
                        placeholder="Full Name"
                        className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label>Contact Phone</label>
                      <input
                        type="tel"
                        required
                        value={addrMobile}
                        onChange={(e) => setAddrMobile(e.target.value)}
                        placeholder="Mobile Number"
                        className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label>Street Address</label>
                    <input
                      type="text"
                      required
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                      placeholder="House No, Building, Area details"
                      className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label>City</label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label>State</label>
                      <input
                        type="text"
                        required
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        placeholder="State"
                        className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label>Pincode</label>
                      <input
                        type="text"
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="6 digits"
                        className="border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 outline-none text-gray-800 bg-white"
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2 mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isDefault}
                      onChange={(e) => setIsDefault(e.target.checked)}
                      className="rounded border-marigold text-saffron focus:ring-saffron w-3.5 h-3.5"
                    />
                    <span className="font-light">Set as Default Address</span>
                  </label>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={resetAddressForm}
                      className="border border-gray-300 text-gray-500 py-2 px-5 rounded-lg text-xs hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-saffron hover:bg-saffron-dark text-white font-bold py-2 px-5 rounded-lg text-xs shadow-sm active:scale-95 transition"
                    >
                      {addressId ? 'Save Address' : 'Add Address'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* List of saved addresses */}
            {user.addresses && user.addresses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className={`rounded-2xl border p-4 shadow-inner flex flex-col justify-between font-sans text-xs relative ${
                      addr.isDefault ? 'border-saffron bg-cream-light/35' : 'border-gray-100 bg-white'
                    }`}
                  >
                    <div>
                      {/* Name header */}
                      <div className="font-bold text-gray-800 flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-deepred">{addr.fullName}</span>
                        {addr.isDefault && (
                          <span className="text-[9px] bg-saffron text-white px-2 py-0.5 rounded font-semibold uppercase flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Default</span>
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-light mt-1">{addr.addressLine}</p>
                      <p className="text-gray-600 font-light">{addr.city}, {addr.state} - {addr.pincode}</p>
                      <p className="text-gray-600 font-light mt-1.5">📞 Phone: {addr.mobile}</p>
                    </div>

                    <div className="flex justify-end gap-3 border-t border-marigold/10 pt-3 mt-4">
                      {!addr.isDefault && (
                        <button
                          onClick={() => handleMakeDefault(addr)}
                          className="text-[10px] text-saffron hover:text-saffron-dark font-bold transition mr-auto cursor-pointer"
                        >
                          Make Default
                        </button>
                      )}
                      <button
                        onClick={() => handleEditAddress(addr)}
                        className="text-[10px] text-gray-600 hover:text-saffron font-bold transition"
                      >
                        Edit Details
                      </button>
                      <button
                        onClick={() => deleteAddress(addr.id)}
                        className="text-[10px] text-rose-500 hover:text-rose-700 font-bold transition flex items-center gap-1"
                        title="Delete Address"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400 font-light text-center py-6">
                No delivery addresses saved. Click "Add Address" above to set up a destination.
              </p>
            )}
          </div>

          {/* Section 3: Logout button */}
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm text-center">
            <p className="text-xs text-gray-500 font-light mb-4">
              Logout of your session securely from this browser.
            </p>
            <button
              onClick={handleLogout}
              className="bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 font-bold py-2.5 px-8 rounded-full text-xs shadow-sm transition active:scale-95 cursor-pointer"
            >
              Sign Out Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
