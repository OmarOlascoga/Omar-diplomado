<template>
  <BreadCrumb :breadcrumbs="breadcrumbs" />
  <div class="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
    <div class="mb-3 flex justify-between" v-if="!create">
      <h2 class="text-lg font-bold ml-3">Listado de invitados</h2>
      <router-link to="/invitados/crear" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Registro
      </router-link>
    </div>
    <Grid
      :headers="headers"
      :data="data"
      @onEliminar="onEliminar"
      @onEditar="onEditar"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Grid from "@/utils/Grid/Grid.vue";
import BreadCrumb from "@/utils/Breadcrumb.vue";
import Swal from "sweetalert2";

const headers = ref([]); // Aquí se definen los encabezados de la tabla
const data = ref([]); // Aquí se define la data de la tabla
const create = ref(false); // Estado de creación de registro

onMounted(() => onInitData());

const breadcrumbs = [
  { text: "Inicio", link: "#" },
  { text: "Invitados", link: "#" },
];

const onEditar = (item: any) => {
  alert(JSON.stringify(item)); // Aquí puedes implementar la lógica para editar
};

const onEliminar = (id: number) => {
  const index = data.value?.findIndex(({ ID }) => ID === id);  
  if (index !== -1) {
    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: `Invitado ${data.value[index].ID}: ${data.value[index].NOMBRE}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        data.value.splice(index, 1);
        Swal.fire("Eliminado!", "El registro ha sido eliminado.", "success");
      }
    });
  }
};

const onInitData = () => {
  // Definir los encabezados de la tabla
  headers.value = [
    "ID",
    "NOMBRE",
    "DEPENDENCIA",
    "CARGO",
    "ESTADO DE ASISTENCIA",
    "ACCIONES", // Agregada la columna de acciones
  ];

  // Definir la data de ejemplo
  data.value = [
    {
      ID: 1,
      NOMBRE: "Juan Pérez",
      DEPENDENCIA: "Administración",
      CARGO: "Gerente",
      ESTADO_ASISTENCIA: "Asistió",
    },
    {
      ID: 2,
      NOMBRE: "María García",
      DEPENDENCIA: "Recursos Humanos",
      CARGO: "Coordinadora",
      ESTADO_ASISTENCIA: "No asistió",
    },
    {
      ID: 3,
      NOMBRE: "Carlos López",
      DEPENDENCIA: "Finanzas",
      CARGO: "Contador",
      ESTADO_ASISTENCIA: "Asistió",
    },
    {
      ID: 4,
      NOMBRE: "Lucía Castro",
      DEPENDENCIA: "IT",
      CARGO: "Desarrolladora",
      ESTADO_ASISTENCIA: "Asistió",
    },
    {
      ID: 5,
      NOMBRE: "Roberto Martínez",
      DEPENDENCIA: "Operaciones",
      CARGO: "Supervisor",
      ESTADO_ASISTENCIA: "No asistió",
    },
    {
      ID: 6,
      NOMBRE: "Fernando Torres",
      DEPENDENCIA: "Desarrollo",
      CARGO: "Ingeniero",
      ESTADO_ASISTENCIA: "Asistió",
    },
    {
      ID: 7,
      NOMBRE: "Ana Martínez",
      DEPENDENCIA: "Marketing",
      CARGO: "Coordinadora",
      ESTADO_ASISTENCIA: "Asistió",
    },
    {
      ID: 8,
      NOMBRE: "Pedro Díaz",
      DEPENDENCIA: "Investigación",
      CARGO: "Investigador",
      ESTADO_ASISTENCIA: "No asistió",
    },
  ];
};
</script>
