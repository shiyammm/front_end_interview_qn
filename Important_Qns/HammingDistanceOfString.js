const hammingDistanceOfString = (str1, str2) => {
  if (str1.length !== str2.length) {
    throw new Error('Both stings length is not equal');
  }

  let distance = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(hammingDistanceOfString('hello', 'hwllr'));
