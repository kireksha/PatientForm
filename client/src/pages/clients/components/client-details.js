export const ClientDetails = ({ date, name, phone, complaint }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{complaint}</td>
    </tr>
  );
};
