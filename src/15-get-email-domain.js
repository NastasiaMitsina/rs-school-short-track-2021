/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.match(/@[a-z\-0-9]+\.[a-z]+/g);
  result = result.join('').split('');
  result.splice(0, 1);
  return result.join('');
}

module.exports = getEmailDomain;
