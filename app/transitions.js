export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('monster-gallery'),
    this.use('fade'),
    this.reverse('fade')
  );
}
