export default function() {
  var duration = 500;

  this.transition(
  	this.hasClass('expanded'),
    this.toValue(true),
    this.use('crossFade')
  );
}