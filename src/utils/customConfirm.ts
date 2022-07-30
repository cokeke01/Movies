import Swal from 'sweetalert2';

export default function customConfirm(
  onConfirm: any,
  title: string = 'Are you sure?',
  confirmButtonText: string = 'Delete'
) {
  Swal.fire({
    title,
    confirmButtonText,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
}
//this is to handle delete actions where an alert prompt is display to delete or cancel
