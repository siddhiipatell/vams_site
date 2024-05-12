$(document).ready(function () {
    $('#example').dataTable({
        // scrollX: true,
        "initComplete": function (settings, json) {  
            $("#example").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          },
        // scrollY: false,
        order: [[0, 'asc']],
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                title: 'Excel',
                text: 'Export to Excel'
            },
            {
                extend: 'pdfHtml5',
                title: 'PDF',
                text: 'Export to PDF'

            },
        ],
        rowReorder: true,
        columnDefs: [
            { orderable: true, className: 'reorder', targets: [0, 1, 2, 3] },
            { orderable: false, targets: '_all' }
        ]

    });
});
