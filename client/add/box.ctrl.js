/**
 * Controller for handling the dialog to add a new box
 * @return {function} A controller that contains 2 test elements
 */

module.exports = class BoxAdd {
  constructor ($mdDialog) {
    this.$mdDialog = $mdDialog;

    this.name = '';
    this.description = '';
    // TODO: Make this depend on the default user preferences
    this.visibility = 'listed';
  }
  cancel () {
    this.$mdDialog.cancel();
  }
  canAdd () {
    return !!this.name;
  }
  answer () {
    if (!this.name) return;
    this.$mdDialog.hide({
      name: this.name,
      description: this.description,
      visibility: this.visibility
    });
  }
};
