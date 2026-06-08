export default function DonationForm() {
  return (
    <iframe
      src="https://give.tithe.ly/?formId=9abde483-2375-4b87-98a0-eca4f883725e"
      width="100%"
      height="920"
      style={{ border: 'none', display: 'block' }}
      title="Give Online"
      allow="payment"
    />
  );
}
