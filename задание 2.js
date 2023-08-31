//������� �2. �������� �������, ������� ��������� � �������� ���������� ������ � ������, � ����� ��������� ���� �� � ����������� ������� �������� � ������ ������. ������� ������ ���������� true ��� false.

function checkProperty(obj, propertyName) {
  // ���������, ���������� �� �������� � ������ ������ � �������
  return obj.hasOwnProperty(propertyName);
}

// ������ 
const $Object = {
  name: 'Alice',
  age: 25,
  city: 'London'
};

const propertyToCheck = 'age';
const result = checkProperty($Object, propertyToCheck);

console.log(result); // ������� true, ��� ��� �������� 'age' ���������� � �������