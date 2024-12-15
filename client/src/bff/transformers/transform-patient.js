export const transformPatient = (dbPatient) => ({
  id: dbPatient._id,
  date: dbPatient.requestDate,
  name: dbPatient.fullName,
  phone: dbPatient.phone,
  complaint: dbPatient.complaint,
});
