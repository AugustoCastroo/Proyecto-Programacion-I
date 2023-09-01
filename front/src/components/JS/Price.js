import React from 'react'

export const Price = () => {
  return (
    <div>
        <article className="contain">
            <h2 class="title">Precios</h2>
			<p>Nuestros precios son muy competitivos y ofrecemos una amplia variedad de opciones para satisfacer las necesidades de nuestros clientes.</p>
			<table className='table table-dark table-striped table-bordered border-warning'>
				<thead>
					<tr className='subtitle'>
						<th>Tipo de plaza</th>
						<th>Precio/hora</th>
						<th>Precio/día</th>
					</tr>
				</thead>
				<tbody>
					<tr className='pgph'>
						<td>Cubierta</td>
						<td>$2.00</td>
						<td>$10.00</td>
					</tr>
					<tr className='pgph'>
						<td>Descubierta</td>
						<td>$1.50</td>
						<td>$8.00</td>
					</tr>
					<tr className='pgph'>
						<td>Mensual</td>
						<td>$100.00</td>
						<td>N/A</td>
					</tr>
				</tbody>
			</table>
        </article>
    </div>
  )
}

export default Price