<template>
    <div :style="{ maxHeight: '800px', overflowY: 'auto' }">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-200">
          <tr>
            <th
              v-for="header in headers"
              :key="header"
              class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white divide-y divide-gray-200"
          :style="{ minHeight: '550px', height: '600px !important', overflowY: 'auto' }"
        >
          <tr
            v-for="(row, index) in data"
            :key="index"
            class="hover:bg-gray-50"
          >
            <!-- Para cada valor en la fila (excepto las acciones) -->
            <td
              v-for="(value, key) in row"
              :key="key"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 maxWidth"
            >
              {{ value }}
            </td>
  
            <!-- Columna para los botones de acción (Editar y Eliminar) -->
            <td class="text-center">
  <div class="flex space-x-2"> <!-- Contenedor Flex -->
    <button
      class="action bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="onEditar(row)"
    >
      <component :is="PencilIcon" class="h-5 w-5" />
    </button>
    <button
      class="action bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      @click="onEliminar(row.ID)"
    >
      <component :is="TrashIcon" class="h-5 w-5" />
    </button>
  </div>
</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
  
  const props = defineProps({
    headers: Array,
    data: Array,
  });
  const emit = defineEmits(["onEditar", "onEliminar"]);
  
  const onEliminar = (id) => emit("onEliminar", id);
  const onEditar = (row) => emit("onEditar", row);
  </script>
  
  <style scoped>
  .maxWidth {
    width: 400px; /* Ancho máximo de la columna */
    max-width: 100%; /* Asegura que no exceda el ancho del contenedor */
    overflow-wrap: break-word; /* Permite que las palabras largas se ajusten */
    white-space: normal; /* Permite que el texto se ajuste en múltiples líneas */
    padding: 5px; /* Espaciado interno */
  }
  </style>
  