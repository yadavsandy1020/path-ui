

<script>
   export let currentPage = 1;
    export let totalPages = 1;
    export let totalCounts = 0;
    export let pageSize = 10;
</script>

<div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            {#if currentPage > 1}
            <li class="page-item">
                <a class="page-link" href={`/cbcs?page=${currentPage - 1}`} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            {/if}
            {#each Array(totalPages) as _, i}
            <li class="page-item {currentPage === i + 1 ? 'active' : ''}">
                <a class="page-link" href={`/cbcs?page=${i + 1}`}>{i + 1}</a>
            </li>
            {/each}
            {#if currentPage < totalPages}
            <li class="page-item">
                <a class="page-link" href={`/cbcs?page=${currentPage + 1}`} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            {/if}
        </ul>
    </nav>
</div>