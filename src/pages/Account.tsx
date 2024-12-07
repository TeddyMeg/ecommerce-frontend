import { useAuthStore } from '../store/useAuthStore';
import { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Account() {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    firstName: 'MJ',
    lastName: 'Simel',
    email: 'mjsimel@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span>/</span>
        <span>My Account</span>
      </div>

      <div className="flex gap-12">
        <div className="w-64">
          <h2 className="font-bold mb-4">Manage My Account</h2>
          <ul className="space-y-2">
            <li className="text-red-500">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <h2 className="font-bold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <h2 className="font-bold mt-6 mb-4">My Wishlist</h2>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6">Edit Your Profile</h2>
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-2"
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="col-span-2"
            />

            <div className="col-span-2 mt-6">
              <h3 className="font-bold mb-4">Password Changes</h3>
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Current Password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-2 flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}