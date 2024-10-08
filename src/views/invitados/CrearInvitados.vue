<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <!-- Título del formulario -->
        <h2 class="text-3xl font-bold text-center mb-6 text-blue-700">Crear Invitados</h2>

        <!-- Formulario de creación de invitados -->
        <div class="overflow-x-auto bg-white shadow-md rounded-lg p-6">
            <form class="px-4 py-2" @submit.prevent="onGuardar">
                <div class="mb-3">
                    <label for="id" class="block text-sm font-bold mb-2">ID</label>
                    <input
                        type="number"
                        id="id"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.id"
                        readonly
                    />
                </div>
                <div class="mb-3">
                    <label for="nombre" class="block text-sm font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.nombre"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="dependencia" class="block text-sm font-bold mb-2">Dependencia</label>
                    <input
                        type="text"
                        id="dependencia"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.dependencia"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="cargo" class="block text-sm font-bold mb-2">Cargo</label>
                    <input
                        type="text"
                        id="cargo"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.cargo"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="estado_asistencia" class="block text-sm font-bold mb-2">Estado de Asistencia</label>
                    <select
                        id="estado_asistencia"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.estado_asistencia"
                        required
                    >
                        <option value="" disabled selected>Seleccione una opción</option>
                        <option value="Asistió">Asistió</option>
                        <option value="No asistió">No asistió</option>
                        <option value="Pendiente">Pendiente</option>
                    </select>
                </div>
                <div class="text-right">
                    <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3"
                        @click.prevent="emit('onCerrar')"
                    >
                        Cancelar
                    </button>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Crear Registro
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definir eventos emitidos
const emit = defineEmits(["onGuardar", "onCerrar"]);

// Inicializar el formulario con valores por defecto
const form = ref({
    id: 1, // Cambiar a lógica para obtener el ID correcto
    nombre: '',
    dependencia: '',
    cargo: '',
    estado_asistencia: '',
});

// Función para manejar el guardado del formulario
const onGuardar = () => {
    // Validar que todos los campos requeridos estén llenos
    if (form.value.nombre && form.value.dependencia && form.value.cargo && form.value.estado_asistencia) {
        // Aquí va la lógica para guardar el formulario (puede ser una llamada a la API)
        console.log('Formulario guardado:', form.value);

        // Restablecer el formulario después de guardar
        resetForm();

        // Emitir el evento para notificar que se guardó
        emit('onGuardar');
    } else {
        alert('Por favor, complete todos los campos requeridos.');
    }
};

// Función para restablecer el formulario
const resetForm = () => {
    form.value = {
        id: form.value.id + 1, // Incrementar el ID para el siguiente registro
        nombre: '',
        dependencia: '',
        cargo: '',
        estado_asistencia: '',
    };
};
</script>

<style scoped>
h2 {
    font-size: 2rem;
    color: #2c5282; /* Azul oscuro */
}
</style>
