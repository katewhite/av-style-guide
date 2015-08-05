export default function() {
  
  // List expand/collapse
  this.transition(
  	this.hasClass('expanded'),
    this.toValue(true),
    this.use('toDown', {duration:250}),
    this.reverse('toUp', {duration:500})
  );

  // Grouped list title chevrons
  this.transition(
  	this.hasClass('chevron-up'),
    this.toValue(true),
    this.useAndReverse('fade', {duration:100})
  );
}