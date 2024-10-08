<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <!-- Título del formulario -->
        <h2 class="text-3xl font-bold text-center mb-6 text-blue-700">Crear Sesión</h2>

        <!-- Formulario de creación de sesiones -->
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
                    <label for="lugar" class="block text-sm font-bold mb-2">Lugar</label>
                    <input
                        type="text"
                        id="lugar"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.lugar"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="fecha" class="block text-sm font-bold mb-2">Fecha</label>
                    <input
                        type="date"
                        id="fecha"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.fecha"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="hora_inicio" class="block text-sm font-bold mb-2">Hora de Inicio</label>
                    <input
                        type="time"
                        id="hora_inicio"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.hora_inicio"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="hora_final" class="block text-sm font-bold mb-2">Hora Final</label>
                    <input
                        type="time"
                        id="hora_final"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.hora_final"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="descripcion" class="block text-sm font-bold mb-2">Descripción</label>
                    <textarea
                        id="descripcion"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.descripcion"
                        required
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="presidente" class="block text-sm font-bold mb-2">Presidente</label>
                    <input
                        type="text"
                        id="presidente"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.presidente"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="secretario" class="block text-sm font-bold mb-2">Secretario</label>
                    <input
                        type="text"
                        id="secretario"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.secretario"
                        required
                    />
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
    lugar: '',
    fecha: '',
    hora_inicio: '',
    hora_final: '',
    descripcion: '',
    presidente: '',
    secretario: '',
});

// Función para manejar el guardado del formulario
const onGuardar = () => {
    // Validar que todos los campos requeridos estén llenos
    if (form.value.lugar && form.value.fecha && form.value.hora_inicio && form.value.hora_final && form.value.descripcion && form.value.presidente && form.value.secretario) {
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
        lugar: '',
        fecha: '',
        hora_inicio: '',
        hora_final: '',
        descripcion: '',
        presidente: '',
        secretario: '',
    };
};
</script>

<style scoped>
h2 {
    font-size: 2rem;
    color: #2c5282; /* Azul oscuro */
}
</style>
