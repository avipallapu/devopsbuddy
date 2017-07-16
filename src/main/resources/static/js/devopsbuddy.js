/**
 * Created by lifeavi on 7/16/2017.
 */
$(document).ready(main);

function main(){
    $('.btn-secondary').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var $collapse = $this.closest('.btn-text');
        $collapse.collapse('toggle');
    });
}