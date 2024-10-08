<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <!-- Título del formulario -->
        <h2 class="text-3xl font-bold text-center mb-6 text-blue-700">Crear Actas</h2>
        
        <!-- Formulario de creación de actas -->
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
                    <label for="fecha_acta" class="block text-sm font-bold mb-2">Fecha de Acta</label>
                    <input
                        type="date"
                        id="fecha_acta"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.fecha_acta"
                    />
                </div>
                <div class="mb-3">
                    <label for="asunto" class="block text-sm font-bold mb-2">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.asunto"
                    />
                </div>
                <div class="mb-3">
                    <label for="descripcion" class="block text-sm font-bold mb-2">Descripción</label>
                    <textarea
                        id="descripcion"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.descripcion"
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="participantes" class="block text-sm font-bold mb-2">Participantes</label>
                    <input
                        type="text"
                        id="participantes"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.participantes"
                    />
                </div>
                <div class="mb-3">
                    <label for="resultado" class="block text-sm font-bold mb-2">Resultado</label>
                    <select
                        id="resultado"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.resultado"
                    >
                        <option value="Aprobado">Aprobado</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Denegado">Denegado</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="observaciones" class="block text-sm font-bold mb-2">Observaciones</label>
                    <textarea
                        id="observaciones"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.observaciones"
                    ></textarea>
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

const emit = defineEmits(["onGuardar", "onCerrar"]);

const form = ref({
    id: 1,
    fecha_acta: '',
    asunto: '',
    descripcion: '',
    participantes: '',
    resultado: '',
    observaciones: '',
});

const onGuardar = () => {
    resetForm(); // Resetear el formulario después de guardar
    emit('onGuardar'); // Emitir el evento para notificar que se guardó
};

const resetForm = () => {
    form.value = {
        id: form.value.id + 1, // Incrementar el ID para el siguiente registro
        fecha_acta: '',
        asunto: '',
        descripcion: '',
        participantes: '',
        resultado: '',
        observaciones: '',
    };
};
</script>

<style scoped>
h2 {
    font-size: 2rem;
    color: #2c5282; /* Azul oscuro */
}
</style>
